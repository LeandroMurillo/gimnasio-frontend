import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaRobot } from 'react-icons/fa';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from './ChatbotConfig';
import MessageParser from './messageParser';
import ActionProvider from './actionProvider';

export default function ChatbotContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="position-fixed end-0 me-3 shadow"
        style={{
          zIndex: 1050,
          maxWidth: '370px',
          bottom: '80px',
          display: isOpen ? 'block' : 'none'
        }}>
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
      </div>

      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        variant="primary"
        className="position-fixed bottom-0 end-0 m-3 rounded-pill d-flex align-items-center"
        style={{ zIndex: 1100, padding: '0.5rem 1rem' }}>
        <span className="me-2">¿Necesitas ayuda? Preguntale a GymBot</span>
        <FaRobot size={20} />
      </Button>
    </>
  );
}
