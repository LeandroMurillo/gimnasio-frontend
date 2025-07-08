import { Row, Col } from 'react-bootstrap';
import adidas from '../assets/img/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg';
import under from '../assets/img/Under_armour_logo.svg.png';
import nike from '../assets/img/images.png';

export default function MarcasAsociadas() {
  const marcas = [
    { src: nike, alt: 'Logo de Nike' },
    { src: adidas, alt: 'Logo de Adidas' },
    { src: under, alt: 'Logo de Under Armour' }
  ];

  return (
    <section className="py-5 bg-light text-center">
      <h2 className="fw-bold mb-4">Marcas que nos acompañan:</h2>
      <Row className="justify-content-center align-items-center gx-4 gy-3">
        {marcas.map((marca, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2}>
            <img
              src={marca.src}
              alt={marca.alt}
              className="img-fluid"
              style={{ maxHeight: '100px', objectFit: 'contain' }}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}
