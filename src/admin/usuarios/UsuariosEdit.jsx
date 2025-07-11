import { Edit, SimpleForm, TextInput, BooleanInput } from 'react-admin';

export default function UsuariosEdit(props) {
  return (
    <Edit {...props} title="Editar Usuario">
      <SimpleForm>
        <TextInput source="nombre" />
        <TextInput source="apellido" />
        <TextInput source="correo" />
        <TextInput source="rol" />
        <BooleanInput source="estado" />
      </SimpleForm>
    </Edit>
  );
}
