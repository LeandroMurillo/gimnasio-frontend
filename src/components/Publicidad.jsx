import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Publicidad.css';

const Publicidad = () => {
    return (
        <div className="pagina-publicidad">
            <section className="marcas">
                <h2 className='marcass'>Marcas que nos acompañan:</h2>
                <div className="logos-marcas">
                    <img src="/img/images.png" alt="Nike" />
                    <img src="/img/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="Adidas" />
                    <img className="under" src="/img/Under_armour_logo.svg.png" alt="Under Armour" />
                </div>
            </section>

            <h2 className='comprar'>Productos disponibles en Rolling Gym</h2>

            {/* <ul>
          <li>Proteína Whey - Vainilla / Chocolate</li>
          <li>Botellas reutilizables Rolling</li>
          <li>Guantes de entrenamiento</li>
          <li>Remeras y shorts deportivos</li>
        </ul> */}
            <CardGroup>
                <Card className='cartas'>
                    <img src="/img/156495-800-auto.png" alt="" className='productos' />
                    <Card.Body>
                        <Card.Title className='titulo'>Proteína Whey - Vainilla / Chocolate</Card.Title>
                        <Card.Text className='color-letras'>
                            Proporciona un gran apoyo en la nutrición de quienes quieren aumentar la masa muscular y mejorar la recuperación.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className='cartas'>
                    <img src="/img/sport.jpg" alt="" className='productos' />
                    <Card.Body>
                        <Card.Title className='titulo'>Botellas reutilizables Rolling</Card.Title>
                        <Card.Text className='color-letras'>
                            Botellas reutilizables son ideales para mantenerte hidratado y reducir el impacto ambiental.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className='cartas'>
                    <img className='productos' src="/img/dgamgu009b-m-guante-de-fitness-king-2-0-_-drb-m-0eb83b3de388166a0517265016471273-1024-1024.jpg" alt="" />
                    <Card.Body>
                        <Card.Title className='titulo'>Guantes de entrenamiento</Card.Title>
                        <Card.Text className='color-letras'>
                            Guantes de levantamiento de pesas, protección completa de la palma de la mano, guantes de entrenamiento para gimnasio, ciclismo, ejercicio, transpirables, súper ligeros para hombres y mujeres
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>



            <section className="comentarios">
                <h2>Lo que dicen nuestros clientes:</h2>
                <div className="comentario">
                    <p>💬 “El gimnasio tiene todo lo que necesito. ¡Y la proteína es buenísima!”</p>
                    <span>- Carla M.</span>
                </div>
                <div className="comentario">
                    <p>💬 “Compré los guantes y son muy cómodos. Buena calidad.”</p>
                    <span>- Leo R.</span>
                </div>
                <div className="comentario">
                    <p>💬 “Las marcas con las que trabajan son top, se nota la diferencia.”</p>
                    <span>- Sofía T.</span>
                </div>
            </section>
        </div>
    );
}
export default Publicidad
