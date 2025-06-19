import { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import TarjetaPlanes from '../components/TarjetaPlanes';

export default function Planes() {
  const [planes, setPlanes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/planes`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener los planes');
        return res.json();
      })
      .then((data) => setPlanes(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) {
    return (
      <Container className="my-5 text-center py-5">
        <Spinner animation="border" role="status" />
        <p className="mt-3">Cargando planes...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5 py-5">
        <Alert variant="danger">No se pudieron cargar los planes: {error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5 py-5">
      <Row className="g-5">
        {planes.map((plan) => (
          <Col md={4} key={plan._id || plan.id || plan.nombre}>
            <TarjetaPlanes
              titulo={plan.nombre}
              descripcion={plan.descripcion}
              precio={plan.precio}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
