import { Modal, Badge, Button } from 'react-bootstrap';

export default function DetalleClaseModal({ evento, onHide }) {
  const { cupoMax, asistentes, planesPermitidos = [] } = evento.extendedProps;
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

  return (
    <Modal show onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{evento.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          Horario: {new Date(evento.start).toLocaleTimeString()} –{' '}
          {new Date(evento.end).toLocaleTimeString()}
        </p>

        <p>
          Cupos:{' '}
          <Badge bg={libres ? 'success' : 'danger'}>
            {libres}/{cupoMax}
          </Badge>
        </p>

        <p>Planes habilitados para esta clase:</p>
        <ul className="mb-0">
          {planesPermitidos.length > 0 ? (
            planesPermitidos.map((plan) => <li key={plan._id}>{plan.nombre}</li>)
          ) : (
            <li>No hay planes asociados</li>
          )}
        </ul>
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
