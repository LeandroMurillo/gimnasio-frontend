import { Modal, Badge, Button } from 'react-bootstrap';

export default function DetalleClaseModal({ evento, onHide }) {
  const { cupoMax, asistentes } = evento.extendedProps;
  const libres = cupoMax - asistentes;
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  const handleInscribirse = () => {
    if (!usuario) {
      window.location.href = '/login';
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

  return (
    <Modal show onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{evento.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          Horario: {formatHora(evento.start)} – {formatHora(evento.end)}
        </p>

        <p>
          Cupos:{' '}
          <Badge bg={libres ? 'success' : 'danger'}>
            {libres}/{cupoMax}
          </Badge>
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleInscribirse} disabled={libres <= 0}>
          Inscribirse
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
