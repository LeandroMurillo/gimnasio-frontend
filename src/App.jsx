import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';
import Recomposicion from './pages/RecomposicionCorporal';
import Musculacos from './pages/Musculacos';
import Planes from './pages/Planes';
import Horarios from './pages/Horarios';
import NotFound from './pages/Error404';
import AdminApp from './admin/AdminApp';
import Login from './pages/Login';
import AdminRoute from './ProtectedRoute';

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

  if (!gimnasioInfo) return <p className="text-center mt-5">Cargando configuración...</p>;

  return (
    <Routes>
      <Route element={<Layout gimnasioInfo={gimnasioInfo} />}>
        <Route index element={<Home gimnasioInfo={gimnasioInfo} />} />
        <Route path="/about" element={<SobreNosotros />} />
        <Route path="/recomposicion" element={<Recomposicion />} />
        <Route path="/musculacos" element={<Musculacos />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/contacto" element={<Contacto gimnasioInfo={gimnasioInfo} />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<AdminRoute gimnasioInfo={gimnasioInfo} />}>
        <Route path="/admin/*" element={<AdminApp />} />
      </Route>
    </Routes>
  );
}
