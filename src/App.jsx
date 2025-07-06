import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import SobreNosotros from './pages/SobreNosotros';
import Home from './pages/Home';
import NotFound from './pages/Error404';
import Footer from './components/Footer';
import Recomposicion from './pages/RecomposicionCorporal.jsx';
import Musculacos from './pages/Musculacos.jsx';
import Contacto from './components/Contacto.jsx';
import Publicidad from './components/Publicidad.jsx';
import ChatbotContainer from './chatbot/ChatbotContainer.jsx';

function App() {
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

      <ChatbotContainer />
      <Footer />
    </Router>
  );
}

export default App;
