import { Row, Col, Card, CardGroup, Container, Image } from 'react-bootstrap';

export default function RecomposicionCorporal() {
  return (
    <div className="bg-light">
      <Image
        src="img/1140-exercise-class-esp.jpg"
        alt=""
        fluid
        className="w-100 mt-5"
        style={{ objectFit: 'cover' }}
      />

      <Container className="my-5">
        <Row className="bg-light justify-content-center">
          <Col xs={12} md={10}>
            <div className="mt-4 px-3 px-md-5">
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
                  🏋️ Entrena en el gimnasio (te explicamos cómo utilizar las máquinas), en casa o
                  donde quieras (sin material específico).
                </li>
                <li>💪 Combina rutinas de cardio y fuerza fullbody para conseguir tu objetivo.</li>
                <li>🕘 Rutinas cortas para que el tiempo no sea una excusa.</li>
                <li>👉 Rutinas variadas para que no te aburras.</li>
                <li>📊 Adaptado a todos los niveles: básico, intermedio y avanzado.</li>
                <li>😄 Comparte tu progreso con la comunidad fuertaca y motívate al 200%.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <CardGroup className="bg-light py-4">
        <Card className="m-3 shadow-sm border-0">
          <Card.Img
            variant="top"
            src="src/assets/img/sentadillas-1072392408.webp"
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <Card.Body className="text-center">
            <Card.Title className="bg-warning rounded py-1">Sentadillas</Card.Title>
            <Card.Text className="text-dark">
              Un ejercicio fundamental para trabajar piernas y glúteos, clave para la recomposición
              corporal.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3 shadow-sm border-0">
          <Card.Img
            variant="top"
            src="src/assets/img/dr-joe-demarco-attempts-to-break-the-world-record-for-the-news-photo-1655810983.jpg"
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
            src="src/assets/img/16920356482804.jpg"
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
    </div>
  );
}
