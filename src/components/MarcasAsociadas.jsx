import './Publicidad.css';

import adidas from '../assets/img/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg';
import under from '../assets/img/Under_armour_logo.svg.png';
import nike from '../assets/img/images.png';

export default function MarcasAsociadas() {
  return (
    <section className="marcas">
      <h2 className="titulo-seccion">Marcas que nos acompañan:</h2>
      <div className="logos-marcas">
        <img src={nike} alt="Logo de Nike" />
        <img src={adidas} alt="Logo de Adidas" />
        <img className="logo-under" src={under} alt="Logo de Under Armour" />
      </div>
    </section>
  );
}
