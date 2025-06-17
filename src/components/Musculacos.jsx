import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './musculacos.css';
const Musculacos = () => {
  return (
    <div className='fondo'>
          <img className='imagen' src="/img/615883260.webp" alt="" />
          <div className="seccion-iglesia" >
            <Row className='color-fondotexto'>
    
              <section className='texto'>
                <h2 className='color-titulo'>¡¡LLEVA TUS MÚSCULOS AL SIGUIENTE NIVEL
TÚ ELIGES EL NIVEL DE DESAFÍO!!</h2>
      <p>
    Contamos con dos planes de <strong>Musculacos</strong>, para que todo el mundo pueda darle caña a esos músculos 
    y os pongáis más fuertes que el vinagre sin perder la motivación.
  </p>

  
    <li>💪 <strong>Musculacos Inicial</strong></li>
    <li>🏋️‍♀️ <strong>Musculacos Extensión</strong></li>


  <p>
    Cada rutina incluye 3 opciones de trabajo para que puedas elegir entre distintas variantes, 
    desde las más avanzadas a las más básicas, en función de tu nivel de forma física.
  </p>

  <p>
    En este plan te vendrá bien contar con algo de material de entrenamiento fácil de encontrar, 
    como unas mancuernas o unas gomas. En algunos casos, podrás utilizar solo tu peso corporal 
    u objetos que encuentres en casa, como una mochila o garrafas de agua.
  </p>
              </section>
            </Row>
    
          </div>
          <CardGroup>
            <Card className='cartas'>
              <img src="/img/push_empuje1645691939767-1657194936028-1024x576.png" alt="" />
              <Card.Body>
                <Card.Title className='titulo'>PUSH - EMPUJE</Card.Title>
                <Card.Text className='color-letras'>
                Pectoral, tríceps y hombro.
                </Card.Text>
              </Card.Body>
         
            </Card>
            <Card className='cartas'>
              <img src="/img/pull_traccion1645691939759-1657194936024-1024x576.png" alt="" />
              <Card.Body>
                <Card.Title className='titulo'>PULL - TRACCIÓN</Card.Title>
                <Card.Text className='color-letras'>
                 Espalda y bíceps.
                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card className='cartas'>
              <img src="/img/pierna1645691939773-1657194936019-1024x576.png" alt="" />
              <Card.Body>
                <Card.Title className='titulo'>LEG - PIERNA</Card.Title>
                <Card.Text className='color-letras'>
                  Cuádriceps, isquios, glúteos y pierna en general.
                </Card.Text>
              </Card.Body>
           
            </Card>
          </CardGroup>
    
    
        </div>
    
  )
}

export default Musculacos