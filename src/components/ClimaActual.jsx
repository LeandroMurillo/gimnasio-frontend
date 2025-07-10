import { useEffect, useState } from 'react';
import { Spinner, Alert, Row, Col } from 'react-bootstrap';
import traduccionesClima from './traduccionesClima.json';

const API_KEY = import.meta.env.VITE_METEOSOURCE_KEY;
const LANG = 'en';
const UNITS = 'metric';

export default function ClimaActual() {
  const [clima, setClima] = useState(null);
  const [ciudad, setCiudad] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocalización no soportada');
      setCargando(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;

        // Fetch clima
        fetch(
          `https://www.meteosource.com/api/v1/free/point?lat=${latitude}&lon=${longitude}&sections=current&language=${LANG}&units=${UNITS}&key=${API_KEY}`
        )
          .then((res) => {
            if (!res.ok) throw new Error('Error al obtener el clima');
            return res.json();
          })
          .then((data) => setClima(data.current))
          .catch((err) => setError(err.message));

        // Fetch ubicación
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        )
          .then((res) => res.json())
          .then((data) => {
            const { city, town, village, state } = data.address;
            setCiudad(city || town || village || state || 'Ubicación desconocida');
          })
          .catch(() => setCiudad('Ubicación desconocida'))
          .finally(() => setCargando(false));
      },
      () => {
        setError('No se pudo obtener la ubicación');
        setCargando(false);
      }
    );
  }, []);

  if (cargando || error || !clima || !ciudad) return null;

  const resumenTraducido = traduccionesClima[clima.summary] || clima.summary;
  const iconUrl = `/iconos-clima/medium/${clima.icon_num}.png`;

  return (
    <div
      className="d-none d-lg-block ms-3 p-2"
      style={{
        minWidth: '260px',
        maxWidth: '300px',
        fontSize: '0.95rem'
      }}>
      <Row className="align-items-center">
        <Col xs="auto">
          <img
            src={iconUrl}
            alt={clima.summary}
            width={56}
            height={56}
            style={{ objectFit: 'contain', marginRight: '0.5rem' }}
          />
        </Col>
        <Col className="ps-0">
          clima {resumenTraducido} en {ciudad}
          <div className="small text-muted">
            Temperatura: {clima.temperature} °C <br />
            Humedad: {clima.humidity} % <br />
            Vientos: {clima.wind.speed} km/h
          </div>
        </Col>
      </Row>
    </div>
  );
}
