import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './ChatbotConfig';
import MessageParser from './messageParser';
import ActionProvider from './actionProvider';
import imgChatbot from '../assets/img/depositphotos_224075966-stock-illustration-cute-smiling-robot-chat-bot.jpg';
import './ChatbotContainer.css';

export default function ChatbotContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="chatbot-container">
          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        </div>
      )}

      <button className="chat-toggle-button" onClick={() => setIsOpen((prev) => !prev)}>
        <img src={imgChatbot} alt="Abrir chatbot" style={{ width: '60px', height: '60px' }} />
      </button>
    </>
  );
}
