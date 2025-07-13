import { Menu, MenuItemLink } from 'react-admin';
import { Divider } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useLocation } from 'react-router-dom';

export default function CustomMenu(props) {
  const { pathname } = useLocation();

  return (
    <Menu {...props}>
      <MenuItemLink
        to="/admin/usuarios"
        primaryText="Usuarios"
        leftIcon={<GroupIcon />}
        selected={pathname === '/admin/usuarios'}
        sx={{ mt: 1.5 }}
      />
      <MenuItemLink
        to="/admin/clases"
        primaryText="Clases"
        leftIcon={<FitnessCenterIcon />}
        selected={pathname === '/admin/clases'}
      />
      <MenuItemLink
        to="/admin/mensajes"
        primaryText="Mensajes"
        leftIcon={<MailOutlineIcon />}
        selected={pathname === '/admin/mensajes'}
      />

      <Divider sx={{ my: 1 }} />

      <MenuItemLink
        to="/admin/configuracion"
        primaryText="Configuración"
        leftIcon={<SettingsIcon />}
        selected={pathname === '/admin/configuracion'}
      />
      <MenuItemLink
        to="/admin/soporte"
        primaryText="Soporte"
        leftIcon={<SupportAgentIcon />}
        selected={pathname === '/admin/soporte'}
      />
    </Menu>
  );
}
