import { Card, CardContent, Typography, Link, Button, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function Soporte() {
  const navigate = useNavigate();

  return (
    <>
      <Card>
        <CardContent sx={{ mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            Soporte Técnico
          </Typography>
          <Typography variant="body1" paragraph>
            Sitio web creado como proyecto final del curso{' '}
            <code>"Carrera de Programación FullStack"</code> de RollingCode © durante el año 2025.
          </Typography>
          <Typography variant="body2" paragraph>
            Ante cualquier consulta, puede comunicarse a los siguientes contactos:
          </Typography>
          <Typography variant="body2" paragraph>
            <EmailIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
            soporte@gimnasiorolling.com
          </Typography>
          <Typography variant="body2" paragraph>
            <PhoneIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
            +54 9 11 1234 5678
          </Typography>
          <Typography variant="body2">
            <GitHubIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
            <Link
              href="https://github.com/LeandroMurillo"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover">
              github.com/LeandroMurillo
            </Link>
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ mt: 2 }}>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate('/admin')}>
          Volver
        </Button>
      </Box>
    </>
  );
}
