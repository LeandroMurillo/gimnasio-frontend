import { Card, CardGroup } from 'react-bootstrap';
import './Publicidad.css';

import proteina from '../assets/img/156495-800-auto.png';
import botellas from '../assets/img/sport.jpg';
import guantes from '../assets/img/dgamgu009b-m-guante-de-fitness-king-2-0-_-drb-m-0eb83b3de388166a0517265016471273-1024-1024.jpg';

const productos = [
  {
    src: proteina,
    titulo: 'Proteína Whey - Vainilla / Chocolate',
    descripcion:
      'Proporciona un gran apoyo en la nutrición de quienes quieren aumentar la masa muscular y mejorar la recuperación.'
  },
  {
    src: botellas,
    titulo: 'Botellas reutilizables Rolling',
    descripcion:
      'Botellas reutilizables ideales para mantenerte hidratado y reducir el impacto ambiental.'
  },
  {
    src: guantes,
    titulo: 'Guantes de entrenamiento',
    descripcion:
      'Guantes de levantamiento de pesas, protección completa de la palma de la mano, transpirables y ligeros para hombres y mujeres.'
  }
];

const comentarios = [
  {
    texto: '💬 “El gimnasio tiene todo lo que necesito. ¡Y la proteína es buenísima!”',
    autor: 'Carla M.'
  },
  {
    texto: '💬 “Compré los guantes y son muy cómodos. Buena calidad.”',
    autor: 'Leo R.'
  },
  {
    texto: '💬 “Las marcas con las que trabajan son top, se nota la diferencia.”',
    autor: 'Sofía T.'
  }
];

export default function ProductosDestacados() {
  return (
    <section className="productos-destacados">
      <h2 className="titulo-seccion">Productos disponibles en Rolling Gym</h2>

      <CardGroup>
        {productos.map((prod, i) => (
          <Card key={i} className="producto-card">
            <img src={prod.src} alt={prod.titulo} className="producto-img" />
            <Card.Body>
              <Card.Title className="producto-titulo">{prod.titulo}</Card.Title>
              <Card.Text className="producto-descripcion">{prod.descripcion}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>

      <div className="comentarios">
        <h2 className="titulo-seccion">Lo que dicen nuestros clientes:</h2>
        {comentarios.map((c, i) => (
          <div key={i} className="comentario">
            <p>{c.texto}</p>
            <span>- {c.autor}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
