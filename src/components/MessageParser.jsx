import React from 'react';

const MessageParser = ({ children, actions }) => {
const parse = (message) => {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes('hola')) {
    actions.handleHello();
  } else if (lowerMsg.includes('dog')) {
    actions.handleDog();
  } else if (
    lowerMsg.includes('cuota') ||
    lowerMsg.includes('precio') ||
    lowerMsg.includes('vale') ||
    lowerMsg.includes('cuánto') 
  ) {
    actions.handleCuota();
  } else if (
    lowerMsg.includes('ubicación') ||
    lowerMsg.includes('direccion') ||
    lowerMsg.includes('dónde están') ||
    lowerMsg.includes('donde queda')
  ) {
    actions.handleUbicacion();
  }
  else if (
    lowerMsg.includes('horarios') ||
    lowerMsg.includes('hora') ||
    lowerMsg.includes('abrís') ||
    lowerMsg.includes('abren')
  ) {
    actions.handleHorarios();
  }
  else if (
  lowerMsg.includes('contacto') ||
  lowerMsg.includes('contactarme') ||
  lowerMsg.includes('mail') ||
  lowerMsg.includes('correo') ||
  lowerMsg.includes('whatsapp')
) {
  actions.handleContacto();
}
  else {
    actions.handleUnknown(); 
  }
};

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          parse: parse,
          actions,
        })
      )}
    </>
  );
};

export default MessageParser;
