import { useEffect, useState } from 'react';
import { Row, Col, Card, CardGroup } from 'react-bootstrap';

export default function SobreNosotros() {
  const [instructores, setInstructores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  useEffect(() => {
    fetch(`${apiUrl}/usuarios/instructores`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener instructores');
        return res.json();
      })
      .then((data) => {
        setInstructores(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('No se pudieron cargar los instructores');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-5">Cargando instructores...</div>;
  if (error) return <div className="text-danger text-center mt-5">{error}</div>;

  return (
    <div className="text-center">
      <h2 className="mb-4">¿Quiénes somos?</h2>
      <p className="fst-italic text-muted mx-auto mb-5" style={{ maxWidth: '800px' }}>
        Somos un equipo multidisciplinario formado por desarrolladores, diseñadores y apasionados
        del entrenamiento físico. Nos une una misma visión: potenciar el mundo del fitness a través
        de la tecnología. Creamos esta plataforma para que el gimnasio Rolling tenga una presencia
        digital moderna, accesible y funcional. Desde el diseño visual hasta cada línea de código,
        cuidamos los detalles para brindar una experiencia fluida a los usuarios, tanto entrenadores
        como alumnos. Nuestro compromiso es con la comunidad. Por eso, trabajamos con herramientas
        actuales, priorizando la usabilidad, la velocidad y la accesibilidad. Nos motiva saber que
        detrás de cada rutina, cada clase reservada y cada visita al sitio, hay personas buscando
        superarse. Este proyecto no es solo un desarrollo web: es el resultado de trabajo en equipo,
        aprendizaje constante y una enorme pasión por lo que hacemos.
        <br />
        <strong>“Detrás de un gran gimnasio, hay un gran equipo".</strong>
      </p>

      <Row className="g-4 justify-content-center">
        {[
          {
            nombre: 'Lucas Amado',
            rol: 'Orientado a Backend',
            img: 'src/assets/img/file (2).png'
          },
          {
            nombre: 'Sergio Salazar',
            rol: 'Orientado a Backend',
            img: 'src/assets/img/473400948_620461827024099_1369816849356254613_n.jpg'
          },
          {
            nombre: 'Leandro Murillo',
            rol: 'Full Stack',
            img: 'src/assets/img/377372335_151210151392378_1088626145779674739_n.jpg'
          },
          {
            nombre: 'Nicolas Moya',
            rol: 'Orientado a Backend',
            img: 'src/assets/img/file.png'
          },
          {
            nombre: 'Ezequiel Calvetti',
            rol: 'Orientado a Frontend',
            img: 'src/assets/img/IMG-20250406-WA0002.jpg'
          }
        ].map((miembro, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={miembro.img}
                alt={miembro.nombre}
                className="rounded-circle mx-auto mt-3"
                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title className="mb-2">{miembro.nombre}</Card.Title>
                <Card.Text className="bg-warning rounded px-2 py-1">{miembro.rol}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="mt-5 mb-4">Profesores</h2>
      <CardGroup>
        {instructores.map((profe, i) => (
          <Card key={i} className="m-2 shadow-sm">
            <Card.Img
              variant="top"
              src={
                profe.img
                  ? `${mediaUrl}${profe.img.startsWith('/') ? '' : '/'}${profe.img}`
                  : 'https://via.placeholder.com/250x250?text=Sin+imagen'
              }
              alt={`${profe.nombre} ${profe.apellido}`}
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title className="bg-warning rounded p-2 text-center text-uppercase">
                {profe.nombre} {profe.apellido}
              </Card.Title>
              <Card.Text>{profe.descripcion || 'Instructor del gimnasio Rolling.'}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
