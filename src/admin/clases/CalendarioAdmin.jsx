import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ClaseAdminModal from './ClaseAdminModal';

export default function CalendarioAdmin() {
  const [events, setEvents] = useState([]);
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);

  useEffect(() => {
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
  }, []);

  const handleSelect = async (info) => {
    const nombre = prompt('Ingrese el nombre de la clase:');
    if (!nombre) return;

    const nuevaClase = {
      nombre,
      fechaInicio: info.startStr,
      fechaFin: info.endStr,
      categoria: '64f123abc123...', // <- reemplazar con una ID válida real
      instructor: '64f456def456...', // <- reemplazar con una ID válida real
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

      setEvents((prev) => [
        ...prev,
        {
          id: claseCreada._id,
          title: claseCreada.nombre,
          start: claseCreada.fechaInicio,
          end: claseCreada.fechaFin
        }
      ]);
    } catch (err) {
      console.error(err);
      alert('No se pudo crear la clase');
    }
  };

  const handleEventClick = ({ event }) => {
    setEventoSeleccionado(event);
  };

  const handleEliminarClase = (id) => {
    setEvents((prev) => prev.filter((clase) => clase.id !== id));
    setEventoSeleccionado(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Gestión de clases</h2>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        locale="es"
        height="auto"
        selectable={true}
        select={handleSelect}
        events={events}
        eventClick={handleEventClick}
        allDaySlot={false}
        slotMinTime="06:00:00"
        slotMaxTime="22:00:00"
        slotDuration="01:00:00"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,timeGridDay'
        }}
      />

      {eventoSeleccionado && (
        <ClaseAdminModal
          evento={eventoSeleccionado}
          onClose={() => setEventoSeleccionado(null)}
          onEliminar={() => handleEliminarClase(eventoSeleccionado.id)}
        />
      )}
    </div>
  );
}
