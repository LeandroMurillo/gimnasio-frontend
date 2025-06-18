import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './SobreNosotros.css';

const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros">
      <h2>¿Quienes somos?</h2>
      <p className="frase-equipo">
        Somos un equipo multidisciplinario formado por desarrolladores, diseñadores y apasionados
        del entrenamiento físico. Nos une una misma visión: potenciar el mundo del fitness a través
        de la tecnología. Creamos esta plataforma para que el gimnasio Rolling tenga una presencia
        digital moderna, accesible y funcional. Desde el diseño visual hasta cada línea de código,
        cuidamos los detalles para brindar una experiencia fluida a los usuarios, tanto entrenadores
        como alumnos. Nuestro compromiso es con la comunidad. Por eso, trabajamos con herramientas
        actuales, priorizando la usabilidad, la velocidad y la accesibilidad. Nos motiva saber que
        detrás de cada rutina, cada clase reservada y cada visita al sitio, hay personas buscando
        superarse. Este proyecto no es solo un desarrollo web: es el resultado de trabajo en equipo,
        aprendizaje constante y una enorme pasión por lo que hacemos.
        <br />
        <strong>“Detrás de un gran gimnasio, hay un gran equipo".</strong>
      </p>

      <div className="equipo">
        <div className="miembro">
          <img src="src/assets/img/file (2).png" />
          <p>
            Lucas Amado <br /> <p className="subrayado">Orientado a Backend</p>{' '}
          </p>
        </div>

        <div className="miembro">
          <img src="src/assets/img/473400948_620461827024099_1369816849356254613_n.jpg" />
          <p>
            Sergio Salazar <br />
            <p className="subrayado">Orientado a backend</p>
          </p>
        </div>
        <div className="miembro">
          <img src="src/assets/img/377372335_151210151392378_1088626145779674739_n.jpg" />
          <p>
            Leandro Murillo <br />
            <p className="subrayado">Full Stack</p>
          </p>
        </div>
        <div className="miembro">
          <img src="src/assets/img/file.png" />
          <p>
            Nicolas Moya <br /> <p className="subrayado">Orientdo a backend</p>
          </p>
        </div>
        <div className="miembro">
          <img src="src/assets/img/IMG-20250406-WA0002.jpg" className="foto-mia" />
          <p>
            Ezequiel Calvetti <br /> <p className="subrayado">Orientado a Frontend</p>
          </p>
        </div>
      </div>

      <h2>Profesores</h2>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            className="fotos"
            src="src/assets/img/istockphoto-1448292619-612x612.jpg"
          />
          <Card.Body>
            <Card.Title className="nombres">Juan Villagra</Card.Title>
            <Card.Text>Licenciado en nutrición y entrenador con orientación deportiva.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="fotos"
            src="src/assets/img/istockphoto-1334046740-612x612.jpg"
          />
          <Card.Body>
            <Card.Title className="nombres">Camila Delgado</Card.Title>
            <Card.Text>Preparadora Física y Entrenadora Personal titulada del ENADE.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="fotos"
            src="src/assets/img/depositphotos_139559904-stock-photo-sports-teacher-writing-on-clipboard.jpg"
          />
          <Card.Body>
            <Card.Title className="nombres">Facundo Gomez</Card.Title>
            <Card.Text>Profesor en Educacion Fisica y Entrenamiento personalizado.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </section>
  );
};

export default SobreNosotros;
