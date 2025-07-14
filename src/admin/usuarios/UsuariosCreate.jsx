import { Create, SimpleForm, TextInput, BooleanInput } from 'react-admin';
import CustomToolbar from '../CustomToolbar';

export default function UsuariosCreate(props) {
  return (
    <Create {...props} title="Crear Usuario">
      <SimpleForm toolbar={<CustomToolbar resourcePath="/admin/usuarios" />}>
        <TextInput source="nombre" label="Nombre" />
        <TextInput source="apellido" label="Apellido" />
        <TextInput source="correo" label="Correo Electrónico" />
        <TextInput source="telefono" label="Teléfono" />
        <TextInput source="password" type="password" label="Contraseña" />
        <TextInput source="rol" label="Rol" />
        <BooleanInput source="estado" label="Activo" defaultValue={true} />
      </SimpleForm>
    </Create>
  );
}
