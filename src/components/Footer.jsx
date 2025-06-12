import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 ">
      <Container className='caja1'>
        <img src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg0MTk4YmNkNTY4ODE5MTgxMTFkZWI4ZWU3NTY4Nzk6ZmlsZV8wMDAwMDAwMDQ5ODg2MWY1ODBkMjEyZjMwMjE1NWI1MyIsInRzIjoiNDg1ODY5IiwicCI6InB5aSIsInNpZyI6IjllNjE4YjA3YmZiNDQ3ZDAyNzQwYjBkMzc5ZjA3YjA2YTRkNDRhMmRjNjY0MTc0ZWIzOTI2ZDZhNGMyYmY4MmYiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==" alt="logo" className='logo-footer' />
      </Container>
      <div className='caja2'>
        <h3> Siguenos</h3>
        <img className='iconos1' src="public/img/instagram.png" alt="" />
        <img src="public/img/facebook.png" className='iconos2' alt="" />
      </div>
      <div class="footer-container">
        <div class="footer-column">
          <h3>Acerca de</h3>
          <p>Somos una empresa dedicada a ofrecer soluciones innovadoras para tus necesidades.</p>
        </div>
        <div class="footer-column">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Contacto</h3>
          <ul>
            <li><a href="#">Email: info@empresa.com</a></li>
            <li><a href="#">Teléfono: +123 456 789</a></li>
            <li><a href="#">Dirección: Av. Principal 123</a></li>
          </ul>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
