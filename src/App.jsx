import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import SobreNosotros from './pages/SobreNosotros';
import Home from './pages/Home';
import NotFound from './pages/Error404';
import Footer from './components/Footer';
import RecomposicionCorporal from './pages/RecomposicionCorporal';
import Musculacos from './pages/Musculacos';

function App() {
  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<SobreNosotros />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/recomposicion" element={<RecomposicionCorporal />} />
        <Route path="/musculacos" element={<Musculacos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
