import './Contacto.css';
import iconoCasa from '../assets/img/icone-de-la-maison-orange.png';
import iconoGmail from '../assets/img/icone-gmail-logo-png-orange.png';
import iconoComentario from '../assets/img/icone-de-commentaire-et-de-retroaction-orange.png';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Su mensaje ha sido enviado ✅');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="contacto2-container">
      <h2>Contacta con nosotros</h2>
      <p className="subtitulo">Rellená nuestro formulario o llamanos por teléfono</p>
      <hr />

      <div className="contacto2-content">
        <div className="formulario-contacto">
          <h3>Envíanos un mensaje</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="boton-enviar">
              Enviar
            </button>
          </form>
        </div>

        <div className="contacto2-info">
          <div className="info-bloque">
            <img src={iconoCasa} alt="Nuestra ubicación" />
            <h3>Nuestra sede</h3>
            <p>
              Av. Fitness 123
              <br />
              Yerba Buena, Tucumán
            </p>
          </div>

          <div className="info-bloque">
            <img src={iconoComentario} alt="Teléfonos" />
            <h3>Datos de contacto</h3>
            <p>
              Tel: (011) 1234 5678
              <br />
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
    </div>
  );
}
