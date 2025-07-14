import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import MarcasAsociadas from '../components/MarcasAsociadas';
import ProductosDestacados from '../components/ProductosDestacados';
import banner from '../assets/img/banner.png';
import promoVideo from '../assets/video/promoVideo.mp4';

const clasesPopulares = [
  {
    titulo: 'Fit Dance',
    descripcion: 'Clase de ejercicio que combina movimientos de baile con entrenamiento físico.',
    imagen:
      'https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/fitdance-cover-ar.webp',
    alt: 'Clase Fit Dance'
  },
  {
    titulo: 'Smart ABS',
    descripcion: 'Clase grupal enfocada en fortalecer y tonificar los músculos abdominales.',
    imagen:
      'https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/abdominal-cover-ar.webp',
    alt: 'Clase Smart ABS'
  },
  {
    titulo: 'Smart Cross',
    descripcion: 'Entrenamiento funcional que trabaja el cuerpo completo.',
    imagen:
      'https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/smart-cross-cover-ar.webp',
    alt: 'Clase Smart Cross'
  }
];

export default function Home() {
  return (
    <>
      <Image
        src={banner}
        alt="Banner del gimnasio Rolling"
        className="w-100"
        style={{ objectFit: 'cover' }}
      />

      <section className="py-4">
        <Container>
          <Row>
            <Col xs={12} md={6} className="order-2 order-md-1">
              <p>¡Transforma tu cuerpo en Rolling!</p>
              <p>
                En Gimnasio Rolling te ayudamos a alcanzar tus metas con los mejores entrenadores,
                equipos de última generación y un ambiente motivador. <br />
                Ya sea que quieras ganar músculo, bajar de peso o simplemente sentirte mejor contigo
                mismo, Rolling es tu lugar.
              </p>
              <ul>
                <li>Planes accesibles</li>
                <li>Rutinas personalizadas</li>
                <li>Clases grupales: funcional, spinning, yoga y más</li>
                <li>¡Abierto los 7 días de la semana!</li>
              </ul>
            </Col>

            <Col xs={12} md={6} className="order-1 order-md-2">
              <video
                src={promoVideo}
                controls
                loop
                playsInline
                className="w-100 rounded"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pb-4">
        <Container>
          <h3 className="text-center mb-4">Clases Populares</h3>
          <CardGroup>
            {clasesPopulares.map((clase, index) => (
              <Card key={index}>
                <Card.Img variant="top" src={clase.imagen} alt={clase.alt} />
                <Card.Body>
                  <Card.Title>{clase.titulo}</Card.Title>
                  <Card.Text>{clase.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </Container>
      </section>

      <section className="pb-4">
        <Container>
          <ProductosDestacados />
        </Container>
      </section>

      <section className="pb-5">
        <Container>
          <MarcasAsociadas />
        </Container>
      </section>
    </>
  );
}
