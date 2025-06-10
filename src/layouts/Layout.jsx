import { Outlet } from 'react-router';
import GymNavbar from '../components/GymNavbar';
// import Footer from '../components/Footer';

export default function Layout() {
  return (
    <>
       <GymNavbar /> 
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
