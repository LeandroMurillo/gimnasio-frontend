import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './GymFooter.module.css';

const GymFooter = () => {
    const socialLinks = {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        whatsapp: 'https://wa.me'
    };

    const handleSocialClick = (platform) => {
        console.log(`Redireccionando a ${platform}`);
        // Aquí añadir analytics o tracking
        window.open(socialLinks[platform], '_blank');
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; {new Date().getFullYear()} RollinGym. Todos los derechos reservados.</p>
                <div className={styles.socialIcons}>
                    <FaFacebook 
                        onClick={() => handleSocialClick('facebook')} 
                        className={styles.icon} 
                    />
                    <FaInstagram 
                        onClick={() => handleSocialClick('instagram')} 
                        className={styles.icon} 
                    />
                    <FaWhatsapp 
                        onClick={() => handleSocialClick('whatsapp')} 
                        className={styles.icon} 
                    />
                </div>
            </div>
        </footer>
    );
};

export default GymFooter;
/* import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './GymFooter.module.css';

const GymFooter = () => {
  const socialLinks = {
    facebook: 'https://facebook.com/tupagina',
    instagram: 'https://instagram.com/tucuenta',
    whatsapp: 'https://wa.me/numero-de-telefono'
  };

  const handleSocialClick = (platform) => {
    console.log(`Redireccionando a ${platform}`);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        
        <div className="social-icons">
          <a 
            href={socialLinks.facebook} 
            onClick={() => handleSocialClick('facebook')}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-link"
          >
            <FaFacebook className="icon facebook-icon" />
            <span className="sr-only">Facebook</span>
          </a>
          
          <a 
            href={socialLinks.instagram} 
            onClick={() => handleSocialClick('instagram')}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-link"
          >
            <FaInstagram className="icon instagram-icon" />
            <span className="sr-only">Instagram</span>
          </a>
          
          <a 
            href={socialLinks.whatsapp} 
            onClick={() => handleSocialClick('whatsapp')}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="social-link"
          >
            <FaWhatsapp className="icon whatsapp-icon" />
            <span className="sr-only">WhatsApp</span>
          </a>
        </div>
        
        <div className="footer-links">
          <a href="/privacy">Política de Privacidad</a>
          <a href="/terms">Términos de Servicio</a>
          <a href="/contact">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default GymFooter; */