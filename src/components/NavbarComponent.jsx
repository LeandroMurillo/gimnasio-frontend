import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComponent.css';

export default function NavbarComponent() {
  return (
    <div className="navbarcolor">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <NavLink to="/">
            <img
              src="src/assets/img/logo.png"
              alt="logo"
              className="logo"
            />
          </NavLink>

          <Navbar.Brand as={NavLink} to="/">
            Inicio
          </Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Brand as={NavLink} to="/planes-entrenamiento">
              Planes y rutinas
            </Navbar.Brand>
            <Navbar.Brand as={NavLink} to="/404">
              Tienda
            </Navbar.Brand>
            <Navbar.Brand href="/404">Sucursales </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
