import { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ClaseAdminModal({ evento, onClose, onEliminar }) {
  const navigate = useNavigate();
  const datos = evento.extendedProps;
  const [modoEdicion, setModoEdicion] = useState(false);
  const [claseEditada, setClaseEditada] = useState({
    nombre: evento.title,
    fechaInicio: evento.startStr,
    fechaFin: evento.endStr,
    cupoMax: datos.cupoMax
  });

  const handleEliminar = async () => {
    if (!confirm('¿Seguro que querés eliminar esta clase?')) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/clases/${evento.id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error('Error al eliminar');
      onEliminar(); // para refrescar eventos en el calendario
    } catch (err) {
      console.error(err);
      alert('Error al eliminar la clase');
    }
  };

  const handleGuardarCambios = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/clases/${evento.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(claseEditada)
      });
      if (!res.ok) throw new Error('Error al actualizar');
      alert('Clase actualizada');
      setModoEdicion(false);
    } catch (err) {
      console.error(err);
      alert('No se pudo guardar los cambios');
    }
  };

  return (
    <Modal show onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Administrar Clase</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modoEdicion ? (
          <>
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control mb-2"
              value={claseEditada.nombre}
              onChange={(e) => setClaseEditada({ ...claseEditada, nombre: e.target.value })}
            />
            <label>Fecha inicio:</label>
            <input
              type="datetime-local"
              className="form-control mb-2"
              value={new Date(claseEditada.fechaInicio).toISOString().slice(0, 16)}
              onChange={(e) => setClaseEditada({ ...claseEditada, fechaInicio: e.target.value })}
            />
            <label>Fecha fin:</label>
            <input
              type="datetime-local"
              className="form-control mb-2"
              value={new Date(claseEditada.fechaFin).toISOString().slice(0, 16)}
              onChange={(e) => setClaseEditada({ ...claseEditada, fechaFin: e.target.value })}
            />
            <label>Cupo máximo:</label>
            <input
              type="number"
              className="form-control mb-3"
              value={claseEditada.cupoMax}
              onChange={(e) =>
                setClaseEditada({ ...claseEditada, cupoMax: parseInt(e.target.value) })
              }
            />
            <Button variant="success" onClick={handleGuardarCambios}>
              Guardar
            </Button>{' '}
            <Button variant="secondary" onClick={() => setModoEdicion(false)}>
              Cancelar
            </Button>
          </>
        ) : (
          <>
            <p>
              <strong>Nombre:</strong> {evento.title}
            </p>
            <p>
              <strong>Instructor:</strong> {datos.instructor?.nombre} {datos.instructor?.apellido}
            </p>
            <p>
              <strong>Horario:</strong> {new Date(evento.start).toLocaleString()} -{' '}
              {new Date(evento.end).toLocaleString()}
            </p>
            <p>
              <strong>Cupo:</strong> {datos.asistentes ?? 0} / {datos.cupoMax}
            </p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        {!modoEdicion && (
          <>
            <Button variant="primary" onClick={() => setModoEdicion(true)}>
              Editar
            </Button>
            <Button variant="danger" onClick={handleEliminar}>
              Eliminar
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => navigate(`/admin/clases/${evento.id}/asistentes`)}>
              Ver asistentes
            </Button>
          </>
        )}
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
