import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function CalendarioAdmin() {
  const [events, setEvents] = useState([]);
  const [esMovil, setEsMovil] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const actualizarVista = () => {
      setEsMovil(window.innerWidth < 768);
    };
    actualizarVista();
    window.addEventListener('resize', actualizarVista);
    return () => window.removeEventListener('resize', actualizarVista);
  }, []);

  useEffect(() => {
    if (esMovil === null) return;

    const cargarEventos = async () => {
      try {
        const hoy = new Date();
        const inicio = new Date(hoy);
        const fin = new Date(hoy);
        inicio.setDate(hoy.getDate() - 7);
        fin.setDate(hoy.getDate() + 14);

        const toISO = (d) => d.toISOString().split('T')[0];
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/clases?start=${toISO(inicio)}&end=${toISO(fin)}`
        );

        if (!res.ok) throw new Error('Error al cargar clases');
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error('Error al obtener eventos:', error);
      }
    };

    cargarEventos();
  }, [esMovil]);

  const handleSelect = (info) => {
    console.log('Seleccionado:', info); // Para debug
    navigate('/admin/clases/create', {
      state: {
        fechaInicio: info.startStr,
        fechaFin: info.endStr
      }
    });
  };

  const handleEventClick = ({ event }) => {
    navigate(`/admin/clases/${event.id}`);
  };

  if (esMovil === null) return null;

  return (
    <>
      <style>
        {`
          .fc-timegrid-slot {
            height: 40px !important;
          }

          @media (max-width: 767px) {
            .fc-toolbar-title {
              font-size: 1.2rem !important;
            }
          }

          @media (min-width: 768px) {
            .fc-toolbar-title {
              font-size: 1.5rem;
            }
          }
        `}
      </style>

      <div className="container mt-4">
        <h2 className="mb-3">Gestión de clases</h2>
        <FullCalendar
          key={esMovil ? 'movil' : 'desktop'}
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView={esMovil ? 'timeGridDay' : 'timeGridWeek'}
          locale="es"
          height="auto"
          selectable={true}
          selectMirror={true}
          longPressDelay={10}
          select={handleSelect}
          events={events}
          eventClick={handleEventClick}
          allDaySlot={false}
          slotMinTime="06:00:00"
          slotMaxTime="22:00:00"
          slotDuration="01:00:00"
          buttonText={{
            today: 'hoy',
            week: 'semana',
            day: 'día'
          }}
          dayHeaderContent={(arg) => {
            const fecha = arg.date;
            const dia = fecha.toLocaleDateString('es-AR', { weekday: 'long' });
            const diaCapitalizado = dia.charAt(0).toUpperCase() + dia.slice(1);
            const num = fecha.getDate();
            const mes = fecha.getMonth() + 1;
            return `${diaCapitalizado} ${num}/${mes}`;
          }}
          slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
          headerToolbar={{
            left: esMovil ? 'prev' : 'prev,next today',
            center: esMovil ? 'title today' : 'title',
            right: esMovil ? 'next' : 'timeGridWeek,timeGridDay'
          }}
        />
      </div>
    </>
  );
}
