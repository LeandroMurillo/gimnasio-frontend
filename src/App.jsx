import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import SobreNosotros from './pages/SobreNosotros';
import Home from './pages/Home';
import NotFound from './pages/Error404';
import Footer from './components/Footer';
import Recomposicion from './pages/RecomposicionCorporal.jsx';
import Musculacos from './pages/Musculacos.jsx';
import Contacto from './pages/Contacto.jsx';
import ChatbotContainer from './chatbot/ChatbotContainer.jsx';
import Layout from './layouts/Layout.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<SobreNosotros />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/recomposicion" element={<Recomposicion />} />
          <Route path="/musculacos" element={<Musculacos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
      <ChatbotContainer />
    </Router>
  );
}

export default App;
