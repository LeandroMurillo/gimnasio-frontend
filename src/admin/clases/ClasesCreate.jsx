import { Create, SimpleForm, TextInput, DateTimeInput } from 'react-admin';

export default function ClasesCreate(props) {
  return (
    <Create {...props} title="Crear Clase">
      <SimpleForm>
        <TextInput source="titulo" />
        <DateTimeInput source="start" label="Inicio" />
        <DateTimeInput source="end" label="Fin" />
        <TextInput source="backgroundColor" label="Color" />
      </SimpleForm>
    </Create>
  );
}
