import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import LayoutBanner from './layouts/LayoutBanner';
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';
import Recomposicion from './pages/RecomposicionCorporal';
import Musculacos from './pages/Musculacos';
import Planes from './pages/Planes';
import Horarios from './pages/Horarios';
import Error404 from './pages/Error404';
import AdminApp from './admin/AdminApp';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import Registro from './pages/Registro';
import PagoExitoso from './pages/PagoExitoso';

export default function App() {
  const [gimnasioInfo, setGimnasioInfo] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/configuracion`)
      .then((res) => res.json())
      .then((data) => setGimnasioInfo(data))
      .catch((err) => {
        console.error('Error al cargar configuración del gimnasio:', err);
      });
  }, []);

  return (
    <Routes>
      <Route element={<Layout gimnasioInfo={gimnasioInfo} />}>
        <Route path="/about" element={<SobreNosotros />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/contacto" element={<Contacto gimnasioInfo={gimnasioInfo} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/success" element={<PagoExitoso />} />
        <Route path="*" element={<Error404 />} />
      </Route>

      <Route element={<LayoutBanner gimnasioInfo={gimnasioInfo} />}>
        <Route index element={<Home gimnasioInfo={gimnasioInfo} />} />
        <Route path="/recomposicion" element={<Recomposicion />} />
        <Route path="/musculacos" element={<Musculacos />} />
      </Route>

      <Route element={<ProtectedRoute gimnasioInfo={gimnasioInfo} />}>
        <Route path="/admin/*" element={<AdminApp />} />
      </Route>
    </Routes>
  );
}
