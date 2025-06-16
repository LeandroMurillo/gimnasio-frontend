import { Outlet } from 'react-router';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </>
  );
}
