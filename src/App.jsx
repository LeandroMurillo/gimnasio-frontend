import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SobreNosotros from './pages/SobreNosotros';
import Home from './pages/Home';
import NotFound from './pages/Error404';
import RecomposicionCorporal from './pages/RecomposicionCorporal';
import Musculacos from './pages/Musculacos';
import Layout from './layouts/Layout';
import AdminApp from './AdminApp';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<SobreNosotros />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/recomposicion" element={<RecomposicionCorporal />} />
          <Route path="/musculacos" element={<Musculacos />} />
          <Route path="/admin/*" element={<AdminApp />} />
        </Route>
      </Routes>
    </Router>
  );
}
