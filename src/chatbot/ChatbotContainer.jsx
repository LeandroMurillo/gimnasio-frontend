import React, { useState, useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import configBase from './ChatbotConfig';
import MessageParser from './messageParser';
import ActionProvider from './actionProvider';
import { Button } from 'react-bootstrap';
import SmartToyIcon from '@mui/icons-material/SmartToy';

export default function ChatbotContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div
        className="position-fixed flex-column bg-white rounded shadow"
        style={{
          bottom: '50px',
          right: '20px',
          width: '275px',
          height: '500px',
          display: isOpen ? 'block' : 'none',
          zIndex: 999
        }}>
        <Chatbot
          config={configBase}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          placeholderText="Escribe tu mensaje aquí..."
          headerText="Conversación con GymBot"
        />
      </div>

      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="position-fixed d-flex align-items-center gap-2 border-0"
        style={{
          bottom: '5px',
          right: '20px',
          height: '40px',
          padding: '0 10px',
          borderRadius: '100px',
          backgroundColor: 'white',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
          fontWeight: 'bold',
          fontSize: '0.85rem',
          color: '#333'
        }}>
        {!isMobile && <span>¿Dudas? ¡Preguntale a GymBot!</span>}
        <SmartToyIcon style={{ fontSize: 26, color: '#1976d2' }} />
      </Button>
    </>
  );
}
