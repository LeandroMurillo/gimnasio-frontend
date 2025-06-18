import { createChatBotMessage } from 'react-chatbot-kit';
import Opciones from './Opciones';

function widgetOpciones(props) {
  return <Opciones {...props} />;
}

const config = {
  botName: 'GymBot',
  initialMessages: [
    createChatBotMessage('¡Hola! ¿En qué puedo ayudarte?', {
      widget: 'opciones'
    })
  ],
  widgets: [
    {
      widgetName: 'opciones',
      widgetFunc: widgetOpciones
    }
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#1976d2'
    },
    chatButton: {
      backgroundColor: '#1976d2'
    }
  }
};

export default config;
