
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NanvarComponents';
import Nosotros from './components/SobreNosotros';
import Home from './components/Inicio';
import NotFound from './components/Error404';
import Footer from './components/Footer';
import Recomposicion from './components/recomposicioncorporal';
import Musculacos from './components/Musculacos';
import Publicidad from './components/Publicidad';

function App() {
  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/recomposicion' element={<Recomposicion />}/>
        <Route path='/musculacos' element={<Musculacos />}/>
        <Route path='/publicidad' element={<Publicidad />}/>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
