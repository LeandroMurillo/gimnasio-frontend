import { Row, Col, Card, CardGroup, Container, Image } from 'react-bootstrap';
import bannerRecomposicion from '../assets/img/bannerRecomposicion.jpg';
import imgSentadillas from '../assets/img/imgSentadillas.webp';
import imgFlexiones from '../assets/img/imgFlexiones.jpg';
import imgDominadas from '../assets/img/imgDominadas.jpg';

export default function RecomposicionCorporal() {
  return (
    <div>
      <Image
        src={bannerRecomposicion}
        alt="Banner recomposición"
        className="w-100"
        style={{ objectFit: 'cover' }}
      />

      <section className="py-4">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <div className="px-3 px-md-5">
                <h2 className="text-center fw-bold text-dark mb-4">
                  ¡¡CONSIGUE PERDER PESO Y GANAR MÚSCULO
                  <br />
                  COMBINA RUTINAS DE CARDIO Y FUERZA!!
                </h2>
                <ul className="list-unstyled text-dark fs-6">
                  <li>
                    📆 Plan calendarizado de 12 semanas para conseguir adelgazar y a la vez aumentar
                    músculo.
                  </li>
                  <li>✅ Puedes elegir entre entrenar 3, 5 o 6 días en semana.</li>
                  <li>
                    🏋️ Entrena en el gimnasio, en casa o donde quieras (sin material específico).
                  </li>
                  <li>
                    💪 Combina rutinas de cardio y fuerza fullbody para conseguir tu objetivo.
                  </li>
                  <li>🕘 Rutinas cortas para que el tiempo no sea una excusa.</li>
                  <li>👉 Rutinas variadas para que no te aburras.</li>
                  <li>📊 Adaptado a todos los niveles: básico, intermedio y avanzado.</li>
                  <li>😄 Comparte tu progreso con la comunidad fuertaca y motívate al 200%.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pb-5">
        <Container>
          <CardGroup>
            <Card className="m-3 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={imgSentadillas}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="text-center">
                <Card.Title className="bg-warning rounded py-1">Sentadillas</Card.Title>
                <Card.Text className="text-dark">
                  Un ejercicio fundamental para trabajar piernas y glúteos, clave para la
                  recomposición corporal.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-3 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={imgFlexiones}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="text-center">
                <Card.Title className="bg-warning rounded py-1">Flexiones</Card.Title>
                <Card.Text className="text-dark">
                  Un ejercicio versátil que trabaja el pecho, hombros y tríceps.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="m-3 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={imgDominadas}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="text-center">
                <Card.Title className="bg-warning rounded py-1">Dominadas</Card.Title>
                <Card.Text className="text-dark">
                  Ejercicio para trabajar la espalda y bíceps.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </section>
    </div>
  );
}
