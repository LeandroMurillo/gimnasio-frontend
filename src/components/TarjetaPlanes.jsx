import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function TarjetaPlanes({ titulo, descripcion, precio, planId, setErrorMsg }) {
  const precioFormateado = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  }).format(precio);

  const handlePagar = async () => {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    const token = usuario.token;

    if (!token) {
      setErrorMsg(`Debes iniciar sesión para suscribirte al ${titulo}`);
      return;
    }

    try {
      console.log('🚀 Enviando preferencia:', { titulo, precio, planId });

      const res = await fetch(`${import.meta.env.VITE_API_URL}/pagos/crear-preferencia`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          titulo,
          precio: Math.round(precio),
          planId
        })
      });

      const data = await res.json();

      if (data.id) {
        window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${data.id}`;
      } else {
        setErrorMsg('No se recibió una preferencia de pago válida');
      }
    } catch (error) {
      console.error('Error al iniciar el pago:', error);
      setErrorMsg('Ocurrió un error al generar el enlace de pago');
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

        <Button variant="warning" className="mt-auto w-100 py-2" onClick={handlePagar}>
          Suscribirme
        </Button>
      </Card.Body>
    </Card>
  );
}
