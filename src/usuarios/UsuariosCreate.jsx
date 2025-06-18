import { Create, SimpleForm, TextInput, BooleanInput } from 'react-admin';

export default function UsuariosCreate(props) {
  return (
    <Create {...props} title="Crear Usuario">
      <SimpleForm>
        <TextInput source="nombre" />
        <TextInput source="apellido" />
        <TextInput source="correo" />
        <TextInput source="password" type="password" />
        <TextInput source="rol" />
        <BooleanInput source="estado" defaultValue={true} />
      </SimpleForm>
    </Create>
  );
}
