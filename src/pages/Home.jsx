import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Home.css';

export default function Home() {
  return (
    <div className="fondo">
      <img className="imagen" src="src/assets/img/banner.png" alt="banner" />
      <div className="seccion-iglesia">
        <Row className="color-fondotexto">
          <Col md={5} className="text-center text-md-start">
            <section className="texto">
              <h2 className="color-titulo">¡Transforma tu cuerpo en Rolling!</h2>
              <p>
                En Gimnasio Rolling te ayudamos a alcanzar tus metas con los mejores entrenadores,
                equipos de última generación y un ambiente motivador.
              </p>
              <p>
                Ya sea que quieras ganar músculo, bajar de peso o simplemente sentirte mejor contigo
                mismo, Rolling es tu lugar.
              </p>
              <li> Planes accesibles</li>
              <li> Rutinas personalizadas</li>
              <li>Clases grupales: funcional, spinning, yoga y más</li>
              <li>¡Abierto los 7 días de la semana! </li>
            </section>
          </Col>
          <Col md={5} className="text-center my-3 my-md-0">
            <video
              className="video"
              src="src/assets/video/Gym Rolling Promo_free.mp4"
              controls
              autoPlay
              loop
              playsInline></video>
          </Col>
        </Row>
      </div>
      <CardGroup>
        <Card className="cartas">
          <img
            src="https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/fitdance-cover-ar.webp"
            alt=""
          />
          <Card.Body>
            <Card.Title>Fit Dance</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="cartas">
          <img
            src="https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/abdominal-cover-ar.webp"
            alt=""
          />
          <Card.Body>
            <Card.Title>Smart ABS</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="cartas">
          <img
            src="https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/smart-cross-cover-ar.webp"
            alt=""
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height
              action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
