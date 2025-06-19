import React from 'react'
import { Link } from "react-router-dom";
;
const Error404 = () => {
  return (
    <div className="error-container">
      <div className="primer-container" >
      <div className="segundo-container" >
        <h1 className="error-title">404</h1>
      <p className="error-message"> ¡Oops! Página no encontrada.</p>
      <Link to="/" className="error-button">Volver al Inicio</Link>
      </div>
      </div>
   
      
    </div>
);
};

 

export default Error404
