import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import traduccionesClima from './traduccionesClima.json';

const API_KEY = import.meta.env.VITE_METEOSOURCE_KEY;
const LANG = 'en';
const UNITS = 'metric';

const DEFAULT_COORDS = {
  latitude: -26.8083,
  longitude: -65.2176
};

export default function ClimaActual() {
  const [clima, setClima] = useState(null);
  const [ciudad, setCiudad] = useState('San Miguel de Tucumán');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const fetchClimaYUbicacion = (latitude, longitude) => {
    fetch(
      `https://www.meteosource.com/api/v1/free/point?lat=${latitude}&lon=${longitude}&sections=current&language=${LANG}&units=${UNITS}&key=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener el clima');
        return res.json();
      })
      .then((data) => setClima(data.current))
      .catch((err) => setError(err.message));

    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        const { city, town, village, state } = data.address;
        setCiudad(city || town || village || state || 'San Miguel de Tucumán');
      })
      .catch(() => setCiudad('San Miguel de Tucumán'))
      .finally(() => setCargando(false));
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      fetchClimaYUbicacion(DEFAULT_COORDS.latitude, DEFAULT_COORDS.longitude);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        fetchClimaYUbicacion(coords.latitude, coords.longitude);
      },
      () => {
        fetchClimaYUbicacion(DEFAULT_COORDS.latitude, DEFAULT_COORDS.longitude);
      }
    );
  }, []);

  if (cargando) {
    return <div className="d-none d-lg-block ms-3 p-2 text-muted">Cargando datos del clima...</div>;
  }

  if (error || !clima || !ciudad) return null;

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
          {resumenTraducido} en {ciudad}
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
