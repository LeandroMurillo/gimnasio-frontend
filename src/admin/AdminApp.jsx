import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import simpleRestProvider from 'ra-data-simple-rest';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import CustomLayout from './CustomLayout';

import UsuariosList from './usuarios/UsuariosList';
import UsuariosEdit from './usuarios/UsuariosEdit';
import UsuariosCreate from './usuarios/UsuariosCreate';

import ClasesList from './clases/ClasesList';
import ClasesEdit from './clases/ClasesEdit';
import ClasesCreate from './clases/ClasesCreate';

import CalendarioAdmin from './clases/CalendarioAdmin';
import AsistentesClaseList from './clases/AsistentesClaseList';

import MensajesList from './mensajes/MensajesList';
import customSpanishMessages from '../traducciones';

const i18nProvider = polyglotI18nProvider(() => customSpanishMessages, 'es');

const dataProvider = simpleRestProvider(import.meta.env.VITE_API_URL);

export default function AdminApp() {
  return (
    <Admin
      basename="/admin"
      loginPage={false}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      layout={CustomLayout}>
      <Resource name="usuarios" list={UsuariosList} edit={UsuariosEdit} create={UsuariosCreate} />
      <Resource name="clases" list={ClasesList} edit={ClasesEdit} create={ClasesCreate} />
      <Resource name="mensajes" list={MensajesList} />
      <CustomRoutes>
        <Route path="/calendario" element={<CalendarioAdmin />} />
        <Route path="/clases/:id/asistentes" element={<AsistentesClaseList />} />
      </CustomRoutes>
    </Admin>
  );
}
