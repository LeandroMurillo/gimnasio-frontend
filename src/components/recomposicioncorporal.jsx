import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './recomposicion.css';
const recomposicioncorporal = () => {
  return (
    <div className='fondo'>
      <img className='imagen' src="img/1140-exercise-class-esp.jpg" alt="" />
      <div className="seccion-iglesia" >
        <Row className='color-fondotexto'>

          <section className='texto'>
            <h2 className='color-titulo'>¡¡CONSIGUE PERDER PESO Y GANAR MÚSCULO
              <br /> COMBINA RUTINAS DE CARDIO Y FUERZA!!</h2>
            <li>📆Plan calendarizado de 12 semanas para conseguir adelgazar y la vez aumentar músculo.</li>
            <li>✅ Puedes elegir entre entrenar 3, 5 o 6 días en semana.</li>
            <li>🏋️ Entrena en el gimnasio (te explicamos cómo utilizar las máquinas), en casa o donde quieras (sin material específico).</li>
            <li>💪 Combina rutinas de cardio y fuerza fullbody para conseguir tu objetivo.</li>
            <li>🕘 Rutinas cortas para que el tiempo no sea una excusa.</li>
            <li>👉 Rutinas variadas para que no te aburras.</li>
            <li>📊 Adaptado a todos los niveles: básico, intermedio y avanzado.</li>
            <li>😄 Comparte tu progreso con la comunidad fuertaca y motívate al 200%.</li>
          </section>
        </Row>

      </div>
      <CardGroup>
        <Card className='cartas'>
          <img src="/img/sentadillas-1072392408.webp" alt="" />
          <Card.Body>
            <Card.Title className='titulo'>Sentadillas</Card.Title>
            <Card.Text className='color-letras'>
             Un ejercicio fundamental para trabajar piernas y glúteos, clave para la recomposición corporal. 
            </Card.Text>
          </Card.Body>

        </Card>
        <Card className='cartas'>
          <img src="/img/dr-joe-demarco-attempts-to-break-the-world-record-for-the-news-photo-1655810983.jpg" alt="" />
          <Card.Body>
            <Card.Title className='titulo'>Flexiones</Card.Title>
            <Card.Text className='color-letras'>
              Un ejercicio versátil que trabaja el pecho, hombros y tríceps. 
            </Card.Text>
          </Card.Body>

        </Card>
        <Card className='cartas'>
          <img src="/img/16920356482804.jpg" alt="" />
          <Card.Body>
            <Card.Title className='titulo'>Dominadas</Card.Title>
            <Card.Text className='color-letras'>
             Ejercicio para trabajar la espalda y bíceps. 
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>


    </div>

  )
}

export default recomposicioncorporal