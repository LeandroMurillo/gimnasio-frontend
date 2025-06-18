import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import UsuariosList from './usuarios/UsuariosList';
import UsuariosEdit from './usuarios/UsuariosEdit';
import UsuariosCreate from './usuarios/UsuariosCreate';

const dataProvider = simpleRestProvider(import.meta.env.VITE_API_URL);

export default function AdminApp() {
  return (
    <Admin basename="/admin" dataProvider={dataProvider}>
      <Resource name="usuarios" list={UsuariosList} edit={UsuariosEdit} create={UsuariosCreate} />
    </Admin>
  );
}
