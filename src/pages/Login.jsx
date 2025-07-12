import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Alert, Card, Row, Col } from 'react-bootstrap';

export default function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, password })
      });

      if (!res.ok) throw new Error('Credenciales inválidas');
      const user = await res.json();

      localStorage.setItem('usuario', JSON.stringify(user));

      if (user.rol === 'admin') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/';
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow">
            <h3 className="mb-4 text-center">Iniciar Sesión</h3>

            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {error && (
                <Alert variant="danger" className="text-center">
                  {error}
                </Alert>
              )}

              <div className="text-center mt-3 mb-3">
                ¿Todavía no tienes una cuenta? <Link to="/registro">Regístrate</Link>
              </div>

              <Button variant="warning" type="submit" className="w-100">
                Ingresar
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
