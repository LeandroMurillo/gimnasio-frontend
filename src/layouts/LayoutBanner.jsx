import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';
import ChatbotContainer from '../chatbot/ChatbotContainer';

export default function LayoutBanner({ gimnasioInfo }) {
  return (
    <>
      <NavbarComponent />

      <div className="pt-0 pb-5" style={{ minHeight: '70vh' }}>
        <Outlet />
      </div>

      <Footer gimnasioInfo={gimnasioInfo} />
      <ChatbotContainer gimnasioInfo={gimnasioInfo} />
    </>
  );
}
