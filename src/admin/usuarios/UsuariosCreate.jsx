import { Create, SimpleForm, TextInput, BooleanInput } from 'react-admin';

export default function UsuariosCreate(props) {
  return (
    <Create {...props} title="Crear Usuario">
      <SimpleForm>
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
