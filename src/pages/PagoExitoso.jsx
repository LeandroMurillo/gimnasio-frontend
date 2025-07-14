import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

export default function PagoExitoso() {
  const location = useLocation();
  const navigate = useNavigate();
  const [estado, setEstado] = useState('Procesando pago...');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paymentId = queryParams.get('payment_id');

    const externalRefRaw = queryParams.get('external_reference');
    let planId = null;

    try {
      const externalRef = decodeURIComponent(externalRefRaw);
      planId = JSON.parse(externalRef)?.planId || null;
    } catch (e) {
      console.error('Error al decodificar external_reference:', e);
      planId = null;
    }

    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    const token = usuario.token;

    if (!paymentId || !planId || !token) {
      setEstado('Error: faltan datos para registrar el pago');
      return;
    }

    const registrarPago = async () => {
      try {
        const resp = await fetch(`${import.meta.env.VITE_API_URL}/pagos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token
          },
          body: JSON.stringify({
            mercadoPagoId: paymentId,
            planId,
            monto: 0,
            status: 'approved',
            captured_at: new Date().toISOString()
          })
        });

        const data = await resp.json();

        if (!resp.ok) {
          setEstado(`Error al registrar pago: ${data.error || 'Error desconocido'}`);
          return;
        }

        setEstado('✅ ¡Pago registrado con éxito! Serás redirigido...');
        setTimeout(() => navigate('/'), 3000);
      } catch (error) {
        console.error('Error al registrar pago:', error);
        setEstado('Error al conectar con el servidor.');
      }
    };

    registrarPago();
  }, [location, navigate]);

  return (
    <div className="text-center">
      <h3 className="mb-3">Confirmación de Pago</h3>
      <p>{estado}</p>
      {estado === 'Procesando pago...' && <Spinner animation="border" />}
    </div>
  );
}
