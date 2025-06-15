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