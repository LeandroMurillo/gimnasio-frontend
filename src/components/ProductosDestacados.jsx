import { Card, CardGroup } from 'react-bootstrap';

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

export default function ProductosDestacados() {
  return (
    <section>
      <h2>Productos disponibles en Rolling Gym</h2>

      <CardGroup>
        {productos.map((prod, i) => (
          <Card key={i}>
            <img src={prod.src} alt={prod.titulo} />
            <Card.Body>
              <Card.Title>{prod.titulo}</Card.Title>
              <Card.Text>{prod.descripcion}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </section>
  );
}
