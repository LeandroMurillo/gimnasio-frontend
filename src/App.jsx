import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Contacto from './pages/Contacto.jsx';
//import Error404 from './pages/Error404.jsx';
import Home from './pages/Home.jsx';
//import Horarios from './pages/Horarios.jsx';
import Layout from '../src/layouts/Layout.jsx';
//import Login from './pages/Login.jsx';
//import Planes from './pages/Planes.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
//import Registro from './pages/Registro.jsx';
//import UsuariosAdmin from './pages/UsuariosAdmin.jsx';
//import ClasesAdmin from './pages/ClasesAdmin.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/contacto" element={<Contacto />} />
          {/* <Route path="*" element={<Error404 />} /> */}
          {/* <Route path="/horarios" element={<Horarios />} /> */}
          {/* <Route path="/planes-de-entrenamiento" element={<Planes />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/registro" element={<Registro />} /> */}
        </Route>
        <Route path="/admin/*" element={<PrivateRoute />}>
          {/* <Route path="usuarios" element={<UsuariosAdmin />} /> */}
          {/* <Route path="clases" element={<ClasesAdmin />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
