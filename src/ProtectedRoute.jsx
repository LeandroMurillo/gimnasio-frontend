import { Outlet } from 'react-router-dom';
import Error404 from './pages/Error404';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';

export default function ProtectedRoute({ gimnasioInfo }) {
  const token = localStorage.getItem('token');
  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  if (!token || usuario.rol !== 'admin') {
    return (
      <>
        <NavbarComponent />
        <Error404 />
        <Footer gimnasioInfo={gimnasioInfo} />
      </>
    );
  }

  return <Outlet />;
}
