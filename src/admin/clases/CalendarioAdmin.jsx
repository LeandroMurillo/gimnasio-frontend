import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function CalendarioAdmin() {
  const [events, setEvents] = useState([]);
  const [esMovil, setEsMovil] = useState(null); // Para detectar si es móvil
  const navigate = useNavigate();

  // Detectar si es móvil
  useEffect(() => {
    const actualizarVista = () => {
      setEsMovil(window.innerWidth < 768);
    };
    actualizarVista();
    window.addEventListener('resize', actualizarVista);
    return () => window.removeEventListener('resize', actualizarVista);
  }, []);

  // Cargar eventos una vez que se detecta si es móvil o no
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

  const handleSelect = async (info) => {
    const nombre = prompt('Ingrese el nombre de la clase:');
    if (!nombre) return;

    const nuevaClase = {
      nombre,
      fechaInicio: info.startStr,
      fechaFin: info.endStr,
      categoria: '64f123abc123...', // <- Reemplazar con ID real si se usa
      instructor: '64f456def456...', // <- Reemplazar con ID real si se usa
      cupoMax: 20,
      planesPermitidos: []
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/clases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaClase)
      });

      if (!res.ok) throw new Error('Error al crear clase');
      const claseCreada = await res.json();

      // Redirigir directamente a la edición
      navigate(`/admin/clases/${claseCreada.id}`);
    } catch (err) {
      console.error(err);
      alert('No se pudo crear la clase');
    }
  };

  const handleEventClick = ({ event }) => {
    navigate(`/admin/clases/${event.id}`);
  };

  if (esMovil === null) return null; // Esperar a saber si es móvil

  return (
    <>
      <style>
        {`
          .fc-timegrid-slot {
            height: 40px !important;
          }
        `}
      </style>

      <div className="container mt-4">
        <h2 className="mb-3">Gestión de clases</h2>
        <FullCalendar
          key={esMovil ? 'movil' : 'desktop'} // Forzar re-render al cambiar vista
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView={esMovil ? 'timeGridDay' : 'timeGridWeek'}
          locale="es"
          height="auto"
          selectable
          select={handleSelect}
          events={events}
          eventClick={handleEventClick}
          allDaySlot={false}
          slotMinTime="06:00:00"
          slotMaxTime="22:00:00"
          slotDuration="01:00:00"
          dayHeaderFormat={{ weekday: 'long' }}
          slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
          headerToolbar={{
            left: esMovil ? '' : 'prev,next today',
            center: 'title',
            right: esMovil ? '' : 'timeGridWeek,timeGridDay'
          }}
        />
      </div>
    </>
  );
}
