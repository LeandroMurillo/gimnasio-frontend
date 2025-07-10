import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../assets/img/logo.png';
import fasebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';

export default function Footer() {
  return (
    <footer className="pt-3 pb-3" style={{ backgroundColor: '#ebe5d8' }}>
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-2">
            <h5>Acerca de</h5>
            <p className="text-muted">
              Somos una empresa dedicada a ofrecer soluciones innovadoras para tus necesidades.
            </p>
            <Image src={logo} alt="logo" height={120} />
          </Col>

          <Col md={4} className="mb-2">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Blog
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-2">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li className="text-muted">Email: info@empresa.com</li>
              <li className="text-muted">Teléfono: +123 456 789</li>
              <li className="text-muted">Dirección: Av. Principal 123</li>
            </ul>
            <h5 className="mb-3">Síguenos</h5>
            <Image src={instagram} alt="Instagram" width={25} className="me-3" />
            <Image src={fasebook} alt="Facebook" width={25} />
          </Col>
        </Row>

        <Row>
          <Col className="text-center text-muted">
            © {new Date().getFullYear()} Gimnasio. Todos los derechos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
