import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';

import bannerMusculacos from '../assets/img/BannerMusculacos.webp';

export default function Musculacos() {
  return (
    <>
      <Image src={bannerMusculacos} alt="banner_musculacos" fluid />
      <Container>
        <div>
          <Row>
            <section>
              <h2>¡¡LLEVA TUS MÚSCULOS AL SIGUIENTE NIVEL TÚ ELIGES EL NIVEL DE DESAFÍO!!</h2>
              <p>
                Contamos con dos planes de <strong>Musculacos</strong>, para que todo el mundo pueda
                darle caña a esos músculos y os pongáis más fuertes que el vinagre sin perder la
                motivación.
              </p>

              <li>
                💪 <strong>Musculacos Inicial</strong>
              </li>
              <li>
                🏋️‍♀️ <strong>Musculacos Extensión</strong>
              </li>

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
            </section>
          </Row>
        </div>
        <CardGroup>
          <Card>
            <img src="src/assets/img/push_empuje1645691939767-1657194936028-1024x576.png" alt="" />
            <Card.Body>
              <Card.Title>PUSH - EMPUJE</Card.Title>
              <Card.Text>Pectoral, tríceps y hombro.</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <img
              src="src/assets/img/pull_traccion1645691939759-1657194936024-1024x576.png"
              alt=""
            />
            <Card.Body>
              <Card.Title>PULL - TRACCIÓN</Card.Title>
              <Card.Text>Espalda y bíceps.</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <img src="src/assets/img/pierna1645691939773-1657194936019-1024x576.png" alt="" />
            <Card.Body>
              <Card.Title>LEG - PIERNA</Card.Title>
              <Card.Text>Cuádriceps, isquios, glúteos y pierna en general.</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
}
