import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import DetalleClaseModal from './DetalleClaseModal';

export default function CalendarioClases() {
  const [modal, setModal] = useState(null);
  const [events, setEvents] = useState([]);

  function getSemanaActualRange() {
    const hoy = new Date();
    const diaSemana = hoy.getDay();
    const lunes = new Date(hoy);
    lunes.setDate(hoy.getDate() - ((diaSemana + 6) % 7));
    lunes.setHours(0, 0, 0, 0);

    const domingo = new Date(lunes);
    domingo.setDate(lunes.getDate() + 6);
    domingo.setHours(23, 59, 59, 999);

    const toIsoDate = (d) => d.toISOString().split('T')[0];
    return { startStr: toIsoDate(lunes), endStr: toIsoDate(domingo) };
  }

  useEffect(() => {
    const { startStr, endStr } = getSemanaActualRange();
    fetch(`${import.meta.env.VITE_API_URL}/clases?start=${startStr}&end=${endStr}`)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => setEvents(data))
      .catch((err) => console.error('Error al cargar eventos:', err));
  }, []);

  return (
    <>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        locale="es"
        height="auto"
        allDaySlot={false}
        slotMinTime="06:00:00"
        slotMaxTime="22:00:00"
        slotDuration="02:00:00"
        events={events}
        headerToolbar={{ left: '', center: 'title', right: '' }}
        eventClick={({ event }) => setModal(event)}
      />

      {modal && <DetalleClaseModal evento={modal} onHide={() => setModal(null)} />}
    </>
  );
}
