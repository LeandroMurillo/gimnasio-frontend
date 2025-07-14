import { Container, Nav, Navbar, NavDropdown, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ClimaActual from './ClimaActual';

export default function NavbarComponent() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    navigate('/login');
  };

  return (
    <>
      {usuario && (
        <div className="w-100 bg-warning-subtle py-2 text-center fw-bold d-flex justify-content-center align-items-center gap-3 flex-wrap">
          <span className="mb-0">
            Bienvenido/a {usuario.nombre} {usuario.apellido}
          </span>

          {/* Solo en desktop */}
          {usuario.rol === 'admin' && (
            <Button
              variant="dark"
              size="sm"
              className="fw-bold d-none d-lg-inline"
              onClick={() => navigate('/admin')}>
              Panel de Administración
            </Button>
          )}
        </div>
      )}

      <Navbar expand="lg" style={{ backgroundColor: '#f2ecde' }}>
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

              {usuario ? (
                <>
                  {usuario.rol === 'admin' && (
                    <Button
                      variant="dark"
                      size="sm"
                      className="fw-bold mt-2 mt-lg-0 ms-lg-3 d-inline d-lg-none"
                      onClick={() => navigate('/admin')}>
                      Panel de Administración
                    </Button>
                  )}

                  <Button
                    variant="outline-danger"
                    className="fw-bold mt-2 mt-lg-0 ms-lg-3"
                    onClick={handleLogout}>
                    Cerrar sesión
                  </Button>
                </>
              ) : (
                <Button
                  variant="warning"
                  className="fw-bold mt-2 mt-lg-0 ms-lg-3"
                  onClick={() => navigate('/login')}>
                  Iniciar Sesión
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
