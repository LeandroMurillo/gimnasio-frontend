import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import LoginModal from './LoginModal'; 
import './Nanvar.css';

const NavbarComponent = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <a href="/">
                        <img src="/img/ChatGPT Image 5 jun 2025, 10_13_23 a.m..png" alt="logo" className='logo' />
                    </a>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/nosotros">Sobre nosotros</Nav.Link>
                            <Nav.Link href="/publicidad">Tienda</Nav.Link>
                            <NavDropdown title="Planes y rutinas" id="collapsible-nav-dropdown" className="dropdown-no-scroll">
                                <NavDropdown.Item href="/recomposicion">Recomposición</NavDropdown.Item>
                                <NavDropdown.Item href="/musculacos">Musculacos</NavDropdown.Item>
                    
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Button variant="outline-primary" onClick={() => setShowLogin(true)} className='login'>Acceder</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            
            <LoginModal
                show={showLogin}
                handleClose={() => setShowLogin(false)}
                setLoggedIn={setLoggedIn}
            />
        </>
    );
}

export default NavbarComponent;
