import { Modal, Button, Alert } from 'react-bootstrap';

export default function DetalleClaseModal({ evento, onHide }) {
  const { cupoMax, asistentes, instructor } = evento.extendedProps;
  const libres = cupoMax - asistentes;
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  const ahora = new Date();
  const fechaFin = new Date(evento.end);
  const clasePasada = fechaFin < ahora;

  const handleInscribirse = () => {
    if (!usuario) {
      window.location.href = '/login';
      return;
    }

    if (clasePasada) {
      alert('No se puede inscribir a una clase ya finalizada');
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/asistencias`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${usuario.token}`
      },
      body: JSON.stringify({
        clase: evento.id,
        usuario: usuario._id
      })
    })
      .then((res) => {
        if (!res.ok) throw new Error('Ya estás registrado o no se puede inscribir');
        return res.json();
      })
      .then(() => {
        alert('Inscripción exitosa');
        onHide();
      })
      .catch((err) => {
        console.error(err);
        alert('No se pudo registrar la inscripción');
      });
  };

  const formatHora = (fecha) =>
    new Date(fecha).toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

  // Mensaje dinámico de cupo
  let mensaje = '';
  let color = 'success';

  if (libres === 0) {
    mensaje = '❌ Clase llena';
    color = 'danger';
  } else if (libres <= 3) {
    mensaje = '⚠️ Últimos lugares disponibles';
    color = 'warning';
  } else {
    mensaje = '✅ Todavía hay lugares disponibles';
    color = 'success';
  }

  return (
    <Modal show onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{evento.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          Horario: {formatHora(evento.start)} – {formatHora(evento.end)}
        </p>

        {instructor?.nombre && (
          <p>
            Instructor: <strong>{`${instructor.nombre} ${instructor.apellido}`}</strong>
          </p>
        )}

        <Alert variant={color} className="mt-2">
          {mensaje}
        </Alert>

        {clasePasada && (
          <p className="text-danger fw-semibold mt-2">
            Esta clase ya ha cerrado sus inscripciones.
          </p>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleInscribirse} disabled={libres <= 0 || clasePasada}>
          Inscribirse
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
