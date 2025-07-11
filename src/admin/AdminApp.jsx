import { Admin, Resource, CustomRoutes } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import UsuariosList from './usuarios/UsuariosList';
import UsuariosEdit from './usuarios/UsuariosEdit';
import UsuariosCreate from './usuarios/UsuariosCreate';

import MensajesList from './mensajes/MensajesList';

const dataProvider = simpleRestProvider(import.meta.env.VITE_API_URL);

export default function AdminApp() {
  return (
    <Admin basename="/admin" dataProvider={dataProvider}>
      <Resource name="usuarios" list={UsuariosList} edit={UsuariosEdit} create={UsuariosCreate} />
      <Resource name="mensajes" list={MensajesList} />
    </Admin>
  );
}
