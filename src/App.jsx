import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { useState } from 'react';
import './App.css'
import NavbarComponent from './components/NavbarComponent';
import SobreNosotros from './pages/SobreNosotros';
import Home from './pages/Home';
import NotFound from './pages/Error404';
import Footer from './components/Footer';
import Recomposicion from './pages/RecomposicionCorporal.jsx';
import Musculacos from './pages/Musculacos.jsx';
import Contacto from './components/Contacto.jsx';
import Publicidad from './components/Publicidad';
import config from './components/config.jsx';
import MessageParser from './components/MessageParser.jsx';
import ActionProvider from './components/ActionProvider.jsx';
import imgChatbot from './assets/img/depositphotos_224075966-stock-illustration-cute-smiling-robot-chat-bot.jpg'

function App() {
  const [showBot, toggleBot] = useState(false);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  return (
    <Router>
      <NavbarComponent />

    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<SobreNosotros />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/recomposicion" element={<Recomposicion />} />
        <Route path="/musculacos" element={<Musculacos />} />
        <Route path="/publicidad" element={<Publicidad />} />
           <Route path="/contacto" element={<Contacto />} />
      </Routes>
  {showBot && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            messageHistory={loadMessages()}
            saveMessages={saveMessages}
          />
        </div>
      )}

     <button className="chat-toggle-button" onClick={() => toggleBot((prev) => !prev)}>
  {showBot ? (
     <img
      src={imgChatbot}
      alt="Abrir chatbot"
      style={{ width: '60px', height: '60px' }}
    />
  ) : (
    <img
      src={imgChatbot}
      alt="Abrir chatbot"
      style={{ width: '60px', height: '60px' }}
    />
  )}
</button>
      <Footer />
    </Router>
  );
}

export default App;


