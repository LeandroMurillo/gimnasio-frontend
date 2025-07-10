import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

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
    <Container as="section">
      <h2 className="text-center">Marcas que nos acompañan:</h2>
      <Row className="justify-content-center align-items-center gx-4 gy-3">
        {marcas.map((marca, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2}>
            <Image src={marca.src} alt={marca.alt} fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
