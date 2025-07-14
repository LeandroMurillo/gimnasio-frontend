import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../assets/img/logo.png';
import fasebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import { Link } from 'react-router-dom';

export default function Footer({ gimnasioInfo }) {
  if (!gimnasioInfo) return null;

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="pt-3 pb-3" style={{ backgroundColor: '#f2ecde' }}>
      <Container>
        <Row className="text-center text-md-start">
          <Col xs={12} md={6} lg={3} className="mb-3">
            <h5>Acerca de</h5>
            <p className="text-muted">
              Somos una empresa dedicada a ofrecer soluciones innovadoras para tus necesidades.
            </p>
            <Image src={logo} alt="logo" height={120} />
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-3">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" onClick={handleScrollTop} className="text-decoration-none text-dark">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/planes"
                  onClick={handleScrollTop}
                  className="text-decoration-none text-dark">
                  Planes
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  onClick={handleScrollTop}
                  className="text-decoration-none text-dark">
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to="/recomposicion"
                  onClick={handleScrollTop}
                  className="text-decoration-none text-dark">
                  Blog
                </Link>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-3">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li className="text-muted">Email: {gimnasioInfo?.email ?? 'No disponible'}</li>
              <li className="text-muted">Teléfono: {gimnasioInfo?.telefono ?? 'No disponible'}</li>
              <li className="text-muted">
                Dirección: {gimnasioInfo?.direccion ?? 'No disponible'},
                <br />
                {gimnasioInfo?.ciudad ?? ''}
              </li>
            </ul>
            <h5 className="mb-3">Síguenos</h5>
            {gimnasioInfo?.redes?.instagram && (
              <a href={gimnasioInfo.redes.instagram} target="_blank" rel="noreferrer">
                <Image src={instagram} alt="Instagram" width={25} className="me-3" />
              </a>
            )}
            {gimnasioInfo?.redes?.facebook && (
              <a href={gimnasioInfo.redes.facebook} target="_blank" rel="noreferrer">
                <Image src={fasebook} alt="Facebook" width={25} />
              </a>
            )}
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-3">
            <h5>Ubicación</h5>
            <div className="ratio ratio-4x3">
              {gimnasioInfo?.ubicacion?.iframeSrc ? (
                <iframe
                  src={gimnasioInfo.ubicacion.iframeSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Ubicación del gimnasio"></iframe>
              ) : (
                <div className="text-muted">Ubicación no disponible</div>
              )}
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center text-muted mt-3">
            © {new Date().getFullYear()} {gimnasioInfo?.nombre ?? 'Gimnasio'}. Todos los derechos
            reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
