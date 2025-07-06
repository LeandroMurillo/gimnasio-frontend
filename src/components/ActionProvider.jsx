import React from 'react';
import {
  createChatBotMessage,
  createClientMessage,
  createCustomMessage,
} from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hola!,¿Cómo estás?', {
      delay: 300,
      
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
const handleContacto = () => {
  const botMessage = createChatBotMessage(
    `📞 Datos de contacto:
- Teléfono: +54 381 555 1234
- WhatsApp: +54 381 555 5678
- Email: rollinggym@gmail.com
- Dirección: Av. Fitness 123, Yerba Buena, Tucumán`
  );

  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
};
  const handleDog = () => {
  const botMessage = createChatBotMessage("Aquí va un perrito 🐶", {
    widget: 'dogPicture',
  });

  const simulatedUser = createClientMessage("¡Me encanta!");
  const customMessage = createCustomMessage("Este es un mensaje personalizado", "custom-message");

  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage, simulatedUser, customMessage],
  }));
};

// <--- ESPACIO para claridad

const handleCuota = () => {
  const botMessage = createChatBotMessage("La cuota mensual del gimnasio es de $15.000.");

  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
};

const handleUnknown = () => {
  const botMessage = createChatBotMessage("Lo siento, no entendí tu pregunta. ¿Podés reformularla?");
  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
};

const handleUbicacion = () => {
  const botMessage = createChatBotMessage(
    "Nuestra sede está en Av. Fitness 123, Yerba Buena, Tucumán. ¡Te esperamos!"
  );

  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
};

const handleHorarios = () => {
  const botMessage = createChatBotMessage(
    "Nuestros horarios son: Lunes a Viernes: 7:00 a 22:00. Sábados: 9:00 a 14:00. Domingos cerrado."
  );

  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
};
  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          actions: { handleHello, handleDog,handleCuota, handleUnknown, handleUbicacion,handleHorarios, handleContacto,},
        })
      )}
    </>
  );
};

export default ActionProvider;
