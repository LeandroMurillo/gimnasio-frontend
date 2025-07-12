import { Container, Nav, Navbar, NavDropdown, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ClimaActual from './ClimaActual';

export default function NavbarComponent() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#ebe5d8' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image
            src="src/assets/img/logo.png"
            alt="Logo"
            style={{
              height: '120px',
              marginRight: '15px',
              objectFit: 'cover'
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-grow-1 text-center text-lg-start flex-column flex-lg-row align-items-center align-items-lg-start">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/planes">
              Planes
            </Nav.Link>
            <Nav.Link as={Link} to="/horarios">
              Horarios
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Sobre nosotros
            </Nav.Link>
            <NavDropdown title="Blog" id="nav-dropdown">
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

          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-end mt-3 mt-lg-0">
            <div style={{ width: '270px', overflow: 'hidden' }}>
              <ClimaActual />
            </div>
            <Button
              variant="warning"
              className="fw-bold mt-2 mt-lg-0 ms-lg-3"
              onClick={() => navigate('/login')}>
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
