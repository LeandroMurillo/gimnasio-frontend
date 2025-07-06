import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './DogPicture';
import chatbot from '../assets/img/depositphotos_224075966-stock-illustration-cute-smiling-robot-chat-bot.jpg';

const config = {
initialMessages: [
createChatBotMessage("¡Hola! ¿En qué puedo ayudarte?", {
})

],
  
  botName: 'ChatBot Rolling',

  customComponents: {
    header: () => (
      <div style={{
        backgroundColor: '#376B7E',
        padding: '10px',
        color: 'white',
        borderRadius: '10px 10px 0 0',
        textAlign: 'center',
        fontWeight: 'bold'
      }}>
        Chat del Gimnasio
      </div>
    ),

    input: (props) => (
      <input
        className="react-chatbot-kit-chat-input"
        placeholder="Escribí tu mensaje aquí..."
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    ),


  botAvatar: () => (
    <img
      src={chatbot}
      alt="Bot"
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        objectFit: 'cover'
      }}
    />
  ),

},
  widgets: [

    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;



