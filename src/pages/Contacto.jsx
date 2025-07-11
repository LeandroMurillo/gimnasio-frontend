import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';
import iconoCasa from '../assets/img/icone-de-la-maison-orange.png';
import iconoGmail from '../assets/img/icone-gmail-logo-png-orange.png';
import iconoComentario from '../assets/img/icone-de-commentaire-et-de-retroaction-orange.png';

export default function Contacto({ gimnasioInfo }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/mensajes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Error al enviar el mensaje');

      alert('✅ Su mensaje ha sido enviado correctamente');
      setFormData({ nombre: '', email: '', mensaje: '' });
    } catch (err) {
      console.error(err);
      alert('❌ Hubo un error al enviar el mensaje. Intente nuevamente.');
    }
  };

  return (
    <Container className="py-3">
      <h2 className="text-center mb-3">Contacta con nosotros</h2>
      <p className="text-center text-muted">Rellená nuestro formulario o llamanos por teléfono</p>
      <hr />

      <Row className="mt-4">
        <Col md={6}>
          <h3>Envíanos un mensaje</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Enviar
            </Button>
          </Form>
        </Col>

        <Col md={6} className="mt-4 mt-md-0">
          <Card className="mb-3">
            <Card.Body className="d-flex align-items-start">
              <Image src={iconoCasa} alt="Nuestra sede" width={40} className="me-3" />
              <div>
                <Card.Title>Nuestra sede</Card.Title>
                <Card.Text>
                  {gimnasioInfo.direccion}
                  <br />
                  {gimnasioInfo.ciudad}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body className="d-flex align-items-start">
              <Image src={iconoComentario} alt="Contacto" width={40} className="me-3" />
              <div>
                <Card.Title>Datos de contacto</Card.Title>
                <Card.Text>
                  Tel: {gimnasioInfo.telefono}
                  <br />
                  WhatsApp: {gimnasioInfo.whatsapp}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body className="d-flex align-items-start">
              <Image src={iconoGmail} alt="Email" width={40} className="me-3" />
              <div>
                <Card.Title>Email</Card.Title>
                <Card.Text>{gimnasioInfo.email}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
