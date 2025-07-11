import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';
import ChatbotContainer from '../chatbot/ChatbotContainer';

export default function Layout({ gimnasioInfo }) {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer gimnasioInfo={gimnasioInfo} />
      <ChatbotContainer gimnasioInfo={gimnasioInfo} />
    </>
  );
}
