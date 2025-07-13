import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import DetalleClaseModal from './DetalleClaseModal';

export default function CalendarioClases() {
  const [modal, setModal] = useState(null);
  const [events, setEvents] = useState([]);
  const [esMovil, setEsMovil] = useState(null); // null al principio para evitar parpadeos
  const [rangoVisible, setRangoVisible] = useState({ start: null, end: null });

  // Detectar si es móvil
  useEffect(() => {
    const actualizarVista = () => {
      setEsMovil(window.innerWidth < 768);
    };
    actualizarVista(); // Inicial
    window.addEventListener('resize', actualizarVista);
    return () => window.removeEventListener('resize', actualizarVista);
  }, []);

  // Cargar eventos cuando cambia el rango visible
  useEffect(() => {
    if (!rangoVisible.start || !rangoVisible.end) return;

    fetch(
      `${import.meta.env.VITE_API_URL}/clases?start=${rangoVisible.start}&end=${rangoVisible.end}`
    )
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error('Error al cargar eventos:', err));
  }, [rangoVisible]);

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
        datesSet={({ startStr, endStr }) => {
          setRangoVisible({ start: startStr, end: endStr });
        }}
      />

      {modal && <DetalleClaseModal evento={modal} onHide={() => setModal(null)} />}
    </>
  );
}
