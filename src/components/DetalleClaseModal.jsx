import { Modal, Badge, Button } from 'react-bootstrap';

export default function DetalleClaseModal({ evento, onHide }) {
  const { cupoMax, asistentes } = evento.extendedProps;
  const libres = cupoMax - asistentes;

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
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
