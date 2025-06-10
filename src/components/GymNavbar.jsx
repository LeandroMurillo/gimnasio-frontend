import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './GymNavbar.module.css';
import { useAuth } from '../context/AuthContext';

function GymNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  // Función para verificar si la ruta está activa
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar expand="lg" className={styles.navbarRollin}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.brand}>
          Rollin<span>Gym</span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className={styles.toggler}
        >
          <span className={`navbar-toggler-icon ${styles.togglerIcon}`} />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`${styles.navLink} ${isActive('/') ? styles.activeLink : ''}`}
            >
              Inicio
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/clases" 
              className={`${styles.navLink} ${isActive('/clases') ? styles.activeLink : ''}`}
            >
              Planes
            </Nav.Link>

            <Nav.Link 
              as={Link} 
              to="/clases" 
              className={`${styles.navLink} ${isActive('/clases') ? styles.activeLink : ''}`}
            >
              Inscribite ya!
            </Nav.Link>
            
            <NavDropdown 
              title="Servicios" 
              id="basic-nav-dropdown"
              className={styles.navLink}
            >
              <NavDropdown.Item 
                as={Link} 
                to="/servicios/personal" 
                className={`${styles.dropdownItem} ${isActive('/servicios/personal') ? styles.activeLink : ''}`}
              >
                Entrenamiento Personal
              </NavDropdown.Item>
              
              <NavDropdown.Item 
                as={Link} 
                to="/servicios/grupo" 
                className={styles.dropdownItem}
              >
                Clases en Grupo
              </NavDropdown.Item>
              
              <NavDropdown.Item 
                as={Link} 
                to="/servicios/nutricion" 
                className={styles.dropdownItem}
              >
                Planes Nutricionales
              </NavDropdown.Item>
              
              <NavDropdown.Divider className={styles.dropdownDivider} />
              
              <NavDropdown.Item 
                as={Link} 
                to="/servicios/tienda" 
                className={styles.dropdownItem}
              >
                Tienda
              </NavDropdown.Item>
            </NavDropdown>

            {/* Sección de autenticación */}
            {isAuthenticated ? (
              <>
                {user.role === 'admin' && (
                  <NavDropdown 
                    title="Admin" 
                    id="admin-nav-dropdown"
                    className={`${styles.navLink} ${styles.adminDropdown}`}
                  >
                    <NavDropdown.Item 
                      as={Link} 
                      to="/admin/usuarios"
                      className={styles.dropdownItem}
                    >
                      Usuarios
                    </NavDropdown.Item>
                    <NavDropdown.Item 
                      as={Link} 
                      to="/admin/clases"
                      className={styles.dropdownItem}
                    >
                      Clases
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
                
                <Nav.Link
                  as={Button}
                  onClick={handleLogout}
                  className={styles.navLink}
                >
                  Cerrar sesión
                </Nav.Link>
              </>
            ) : (
              <Nav.Link 
                as={Link} 
                to="/login" 
                className={`${styles.navLink} ${isActive('/login') ? styles.activeLink : ''}`}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default GymNavbar;