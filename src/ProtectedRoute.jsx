import { Outlet } from 'react-router';
import NavbarComponent from './components/NavbarComponent';
import Error404 from './pages/Error404';
import Footer from './components/Footer';

export default function ProtectedRoute({ gimnasioInfo }) {
  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
  const token = usuario.token;

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
