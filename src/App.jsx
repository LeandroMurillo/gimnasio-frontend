import { Routes, Route } from 'react-router-dom';
import SobreNosotros from './pages/SobreNosotros';
import Home from './pages/Home';
import NotFound from './pages/Error404';
import Recomposicion from './pages/RecomposicionCorporal.jsx';
import Musculacos from './pages/Musculacos.jsx';
import Horarios from './pages/Horarios.jsx';
import Planes from './pages/Planes.jsx';
import Contacto from './pages/Contacto.jsx';
import ChatbotContainer from './chatbot/ChatbotContainer.jsx';
import Layout from './layouts/Layout.jsx';

import './App.css';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nosotros" element={<SobreNosotros />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/recomposicion" element={<Recomposicion />} />
        <Route path="/musculacos" element={<Musculacos />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}
