import React, { useEffect, useRef } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Tarjeta({ titulo, descripcion, precio }) {
  const mpRef = useRef(null);

  // Formatea el precio como moneda ARS
  const precioFormateado = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  }).format(precio);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    script.onload = () => {
      mpRef.current = new window.MercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY, {
        locale: 'es-AR'
      });
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handlePagar = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/pagos/crear-preferencia`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          titulo,
          precio: Math.round(precio)
        })
      });
      const data = await res.json();
      if (data.id && mpRef.current) {
        mpRef.current.checkout({
          preference: { id: data.id },
          autoOpen: true
        });
      } else {
        console.warn('MercadoPago no inicializado o preferencia inválida');
      }
    } catch (error) {
      console.error('Error al iniciar pago:', error);
    }
  };

  return (
    <Card className="h-100 w-100 border border-gray border-1 rounded-3 shadow-sm">
      <Card.Body className="d-flex flex-column p-3">
        <Card.Title
          as="div"
          className="d-flex justify-content-between align-items-center mb-2 fs-5 fw-semibold">
          <span>{titulo}</span>
          <span className="fs-5 fw-bold text-secondary">{precioFormateado}</span>
        </Card.Title>

        <Card.Text className="flex-grow-1 mb-3">{descripcion}</Card.Text>

        <Button variant="primary" className="mt-auto w-100 py-2" onClick={handlePagar}>
          Suscribirme
        </Button>
      </Card.Body>
    </Card>
  );
}
