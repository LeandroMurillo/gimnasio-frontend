import { Container } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 ">
      <Container className="caja1">
        <img src="src/assets/img/logo.png" alt="logo" className="logo-footer" />
      </Container>
      <div className="caja2">
        <h3> Siguenos</h3>
        <img className="iconos1" src="src/assets/img/instagram.png" alt="" />
        <img src="src/assets/img/facebook.png" className="iconos2" alt="" />
      </div>
      <div class="footer-container">
        <div class="footer-column">
          <h3>Acerca de</h3>
          <p>Somos una empresa dedicada a ofrecer soluciones innovadoras para tus necesidades.</p>
        </div>
        <div class="footer-column">
          <h3>Enlaces</h3>
          <ul>
            <li>
              <a href="/404">Inicio</a>
            </li>
            <li>
              <a href="/404">Servicios</a>
            </li>
            <li>
              <a href="/404">Contacto</a>
            </li>
            <li>
              <a href="/404">Blog</a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href="#">Email: info@empresa.com</a>
            </li>
            <li>
              <a href="#">Teléfono: +123 456 789</a>
            </li>
            <li>
              <a href="#">Dirección: Av. Principal 123</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
