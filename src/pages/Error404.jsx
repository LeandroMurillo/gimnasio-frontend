import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <Container className="text-center">
      <h1 className="display-1 fw-bold text-warning">404</h1>
      <p className="lead mb-4">¡Oops! Página no encontrada.</p>
      <Button as={Link} to="/" variant="warning">
        Volver al Inicio
      </Button>
    </Container>
  );
}
