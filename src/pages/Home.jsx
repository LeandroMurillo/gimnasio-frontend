import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import './Home.css';

const Home = () => {
  return (
    <div className="fondo">
      <img
        className="imagen"
        src="src/assets/img/banner gimnasio Rolling.png"
        alt="banner gimnasio Rolling"
      />
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
            <Card.Title className="titulo">Fit Dance</Card.Title>
            <Card.Text className="color-letras">
              Clase de ejercicio que combina movimientos de baile con entrenamiento físico
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cartas">
          <img
            src="https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/abdominal-cover-ar.webp"
            alt=""
          />
          <Card.Body>
            <Card.Title className="titulo">Smart ABS</Card.Title>
            <Card.Text className="color-letras">
              Clase grupal de ejercicios enfocada en fortalecer y tonificar la zona media del
              cuerpo, específicamente los músculos abdominales.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cartas">
          <img
            src="https://assets3.smartfit.com.br/assets/new-home-v4-assets/aulas/smart-cross-cover-ar.webp"
            alt=""
          />
          <Card.Body>
            <Card.Title className="titulo">Smart Cross</Card.Title>
            <Card.Text className="color-letras">
              Entrenamiento funcional que busca trabajar el cuerpo completo a diferencia del
              entrenamiento de musculación que trabaja un grupo muscular a la vez.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

    </div>
  );
};

export default Home;
