import { AppBar, TitlePortal } from 'react-admin';
import { Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CustomAppBar(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    navigate('/');
  };

  return (
    <AppBar {...props}>
      <Toolbar>
        <TitlePortal />
        <div style={{ flex: 1 }} /> {/* Espaciador */}
        <Button color="inherit" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
}
