import { Edit, SimpleForm, TextInput, DateTimeInput } from 'react-admin';

export default function ClasesEdit(props) {
  return (
    <Edit {...props} title="Editar Clase">
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="titulo" />
        <DateTimeInput source="start" label="Inicio" />
        <DateTimeInput source="end" label="Fin" />
        <TextInput source="backgroundColor" label="Color" />
      </SimpleForm>
    </Edit>
  );
}
