import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import ClimaActual from './ClimaActual';

export default function NavbarComponent() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: '#ebe5d8'
        }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image
              src="src/assets/img/logo.png"
              style={{
                height: '120px',
                marginRight: '15px',
                objectFit: 'cover'
              }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="align-items-center">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/planes">
                Planes
              </Nav.Link>
              <Nav.Link as={Link} to="/horarios">
                Horarios
              </Nav.Link>
              <Nav.Link as={Link} to="/nosotros">
                Sobre nosotros
              </Nav.Link>

              <NavDropdown title="Planes y rutinas" id="nav-dropdown">
                <NavDropdown.Item as={Link} to="/recomposicion">
                  Recomposición
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/musculacos">
                  Musculacos
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/contacto">
                Contacto
              </Nav.Link>
            </Nav>

            <Nav className="align-items-center">
              <ClimaActual />
              <Button variant="warning" className="fw-bold ms-3" onClick={() => setShowLogin(true)}>
                Acceder
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
    </>
  );
}
