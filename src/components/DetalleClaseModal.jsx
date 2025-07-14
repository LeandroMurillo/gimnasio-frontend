import { Modal, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

export default function DetalleClaseModal({ evento, onHide }) {
  const { cupoMax, asistentes, instructor } = evento.extendedProps;
  const libres = cupoMax - asistentes;
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  const ahora = new Date();
  const fechaFin = new Date(evento.end);
  const clasePasada = fechaFin < ahora;

  const [mensaje, setMensaje] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState('danger');

  const handleInscribirse = () => {
    if (!usuario) {
      setMensaje('Necesitás iniciar sesión para poder inscribirte');
      setTipoMensaje('danger');
      return;
    }

    if (clasePasada) {
      setMensaje('No se puede inscribir a una clase ya finalizada');
      setTipoMensaje('danger');
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
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.msg || 'Error desconocido');

        setMensaje(data.msg);
        setTipoMensaje('success');
        setTimeout(onHide, 2000);
      })
      .catch((err) => {
        console.error(err);
        let msg = err.message;

        if (msg === 'Tu plan no te permite anotarte a esta clase') {
          msg =
            'Tu plan actual no incluye acceso a clases. Consultá a nuestro asistente <strong>GymBot</strong> sobre los planes disponibles, o <a href="/contacto">envianos un mensaje</a> para más info.';
        }

        if (msg === 'El usuario no tiene un plan activo') {
          msg =
            'Aún no tenés un plan activo. <a href="/planes">Ver planes</a> o <a href="/contacto">contactanos</a> para más información.';
        }

        setMensaje(msg);
        setTipoMensaje('danger');
      });
  };

  const formatHora = (fecha) =>
    new Date(fecha).toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

  let disponibilidad = '';
  let color = 'success';
  if (libres === 0) {
    disponibilidad = '❌ Clase llena';
    color = 'danger';
  } else if (libres <= 3) {
    disponibilidad = '⚠️ Últimos lugares disponibles';
    color = 'warning';
  } else {
    disponibilidad = '✅ Todavía hay lugares disponibles';
    color = 'success';
  }

  const deshabilitarInscripcion =
    libres <= 0 ||
    clasePasada ||
    !usuario ||
    (mensaje &&
      (mensaje.includes('Tu plan no te permite') || mensaje.includes('no tiene un plan activo')));

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
          {disponibilidad}
        </Alert>

        {clasePasada && (
          <p className="text-danger fw-semibold mt-2">
            Esta clase ya ha cerrado sus inscripciones.
          </p>
        )}

        {mensaje && (
          <Alert variant={tipoMensaje} className="mt-3">
            {mensaje.includes('iniciar sesión') ? (
              <>
                Necesitás{' '}
                <a href="/login" className="text-decoration-underline">
                  iniciar sesión
                </a>{' '}
                para poder inscribirte
              </>
            ) : mensaje.includes('GymBot') || mensaje.includes('plan activo') ? (
              <span dangerouslySetInnerHTML={{ __html: mensaje }} />
            ) : (
              mensaje
            )}
          </Alert>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleInscribirse} disabled={deshabilitarInscripcion}>
          Inscribirse
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
