import React from 'react';
 import './Contacto.css';
import iconoCasa from '../assets/img/icone-de-la-maison-orange.png';
import iconoGmail from '../assets/img/icone-gmail-logo-png-orange.png';
import iconoComentario from'../assets/img/icone-de-commentaire-et-de-retroaction-orange.png';
import iconoGimnasio from '../assets/img/logo.png'
const Contacto = () => {
  return (
<div className="contacto2-container">
      <h2>Contacta con nosotros</h2>
      <p className="subtitulo">Rellená nuestro formulario o llamanos por teléfono</p>
      <hr />

      <div className="contacto2-info">
        <div className="info-bloque">
          <img src={iconoCasa} alt="Nuestra ubicación" />
          <h3>Nuestra sede</h3>
          <p>Av. Fitness 123<br />Yerba Buena, Tucuman</p>
        </div>

        <div className="info-bloque">
          <img src={iconoComentario} alt="Teléfonos" />
          <h3>Datos de contacto</h3>
          <p>
            Tel: (011) 1234 5678<br />
            WhatsApp: +54 9 11 1111 1111
          </p>
        </div>

        <div className="info-bloque">
          <img src={iconoGmail} alt="Correo electrónico" />
          <h3>Email</h3>
          <p>contacto@gimnasiorolling.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

