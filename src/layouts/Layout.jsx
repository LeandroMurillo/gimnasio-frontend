import { Outlet } from 'react-router';
import GymNavbar from '../components/GymNavbar';
import GymFooter from '../components/GymFooter';

export default function Layout() {
  return (
    <>
       <GymNavbar /> 
      <Outlet />
       <GymFooter /> 
    </>
  );
}
