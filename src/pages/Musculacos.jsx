import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';

import bannerMusculacos from '../assets/img/bannerMusculacos.webp';
import imgPushEmpuje from '../assets/img/imgPushEmpuje.png';
import imgPullTraccion from '../assets/img/imgPullTraccion.png';
import imgLegPierna from '../assets/img/imgLegPierna.png';

export default function Musculacos() {
  return (
    <>
      {/* Banner principal */}
      <Image
        src={bannerMusculacos}
        alt="Banner Musculacos"
        className="w-100"
        style={{ objectFit: 'cover' }}
      />

      {/* Sección principal */}
      <section className="py-4">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <h2 className="fw-bold text-center text-dark mb-4">
                ¡¡LLEVA TUS MÚSCULOS AL SIGUIENTE NIVEL, TÚ ELIGES EL DESAFÍO!!
              </h2>
              <p>
                Contamos con dos planes de <strong>Musculacos</strong>, para que todo el mundo pueda
                darle caña a esos músculos y os pongáis más fuertes que el vinagre sin perder la
                motivación.
              </p>

              <ul>
                <li>
                  💪 <strong>Musculacos Inicial</strong>
                </li>
                <li>
                  🏋️‍♀️ <strong>Musculacos Extensión</strong>
                </li>
              </ul>

              <p>
                Cada rutina incluye 3 opciones de trabajo para que puedas elegir entre distintas
                variantes, desde las más avanzadas a las más básicas, en función de tu nivel de
                forma física.
              </p>

              <p>
                En este plan te vendrá bien contar con algo de material de entrenamiento fácil de
                encontrar, como unas mancuernas o unas gomas. En algunos casos, podrás utilizar solo
                tu peso corporal u objetos que encuentres en casa, como una mochila o garrafas de
                agua.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de tarjetas */}
      <section className="pb-5">
        <Container>
          <CardGroup>
            <Card className="m-2 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={imgPushEmpuje}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="text-center">
                <Card.Title className="bg-warning rounded py-1">PUSH - EMPUJE</Card.Title>
                <Card.Text>Pectoral, tríceps y hombro.</Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-2 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={imgPullTraccion}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="text-center">
                <Card.Title className="bg-warning rounded py-1">PULL - TRACCIÓN</Card.Title>
                <Card.Text>Espalda y bíceps.</Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-2 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={imgLegPierna}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="text-center">
                <Card.Title className="bg-warning rounded py-1">LEG - PIERNA</Card.Title>
                <Card.Text>Cuádriceps, isquios, glúteos y pierna en general.</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </section>
    </>
  );
}
