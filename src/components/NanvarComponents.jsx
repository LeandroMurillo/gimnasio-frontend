import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nanvar.css';


const NavbarComponent = () => {
    return (
        <div className='navbarcolor'>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <NavLink to="/">
                        <img src="gimnasio-frontend/public/img/ChatGPT Image 5 jun 2025, 10_13_23 a.m..png" alt="logo" className='logo' />
                    </NavLink>

                    <Navbar.Brand as={NavLink} to="/">Inicio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Navbar.Brand as={NavLink} to="/nosotros">Planes y rutinas</Navbar.Brand>
                        <Navbar.Brand as={NavLink} to="/404">Tienda</Navbar.Brand>
                        <Navbar.Brand href="#pricing">Sucursales </Navbar.Brand> {/* Ancla a secciones internas */}
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
};

export default NavbarComponent;
