import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 ">
      <div className="caja1">
        <img src="src/assets/img/logo.png" alt="logo" className="logo-footer" />
      </div>
      <div className="caja2">
        <h3 className="seguir"> Siguenos</h3>
        <img className="iconos1" src="publicsrc/assets/img/instagram.png" alt="" />
        <img src="publicsrc/assets/img/facebook.png" className="iconos2" alt="" />
      </div>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Acerca de</h3>
          <p>Somos una empresa dedicada a ofrecer soluciones innovadoras para tus necesidades.</p>
        </div>
        <div className="footer-column">
          <h3>Enlaces</h3>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
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
};

export default Footer;
