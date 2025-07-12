import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import DetalleClaseModal from './DetalleClaseModal';

export default function CalendarioClases() {
  const [modal, setModal] = useState(null);
  const [events, setEvents] = useState([]);
  const [esMovil, setEsMovil] = useState(null); // null al principio para evitar parpadeos

  // Detectar si es móvil
  useEffect(() => {
    const actualizarVista = () => {
      setEsMovil(window.innerWidth < 768);
    };
    actualizarVista(); // Inicial
    window.addEventListener('resize', actualizarVista);
    return () => window.removeEventListener('resize', actualizarVista);
  }, []);

  // Cargar eventos
  useEffect(() => {
    if (esMovil === null) return;

    const hoy = new Date();
    const diaSemana = hoy.getDay();
    const lunes = new Date(hoy);
    lunes.setDate(hoy.getDate() - ((diaSemana + 6) % 7));
    lunes.setHours(0, 0, 0, 0);
    const domingo = new Date(lunes);
    domingo.setDate(lunes.getDate() + 6);
    domingo.setHours(23, 59, 59, 999);

    const start = lunes.toISOString().split('T')[0];
    const end = domingo.toISOString().split('T')[0];

    fetch(`${import.meta.env.VITE_API_URL}/clases?start=${start}&end=${end}`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error('Error al cargar eventos:', err));
  }, [esMovil]);

  if (esMovil === null) return null; // Esperar a saber si es móvil

  return (
    <>
      <style>
        {`
          .fc-timegrid-slot {
            height: 40px !important;
          }

          .fc-event.pasada {
            filter: grayscale(80%) brightness(100%);
          }
        `}
      </style>

      <FullCalendar
        key={esMovil ? 'movil' : 'desktop'} // Forzar re-render cuando cambia
        plugins={[timeGridPlugin]}
        initialView={esMovil ? 'timeGridDay' : 'timeGridWeek'}
        locale="es"
        height="auto"
        expandRows
        allDaySlot={false}
        slotMinTime="06:00:00"
        slotMaxTime="22:00:00"
        slotDuration="01:00:00"
        dayHeaderFormat={{ weekday: 'long' }}
        slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
        headerToolbar={{
          left: '',
          center: 'title',
          right: ''
        }}
        events={events.map((ev) => ({
          ...ev,
          className: new Date(ev.end) < new Date() ? 'pasada' : ''
        }))}
        eventClick={({ event }) => setModal(event)}
      />

      {modal && <DetalleClaseModal evento={modal} onHide={() => setModal(null)} />}
    </>
  );
}
