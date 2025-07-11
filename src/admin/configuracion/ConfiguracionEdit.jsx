import { Edit, SimpleForm, TextInput } from 'react-admin';

export default function ConfiguracionEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="nombre" />
        <TextInput source="direccion" />
        <TextInput source="ciudad" />
        <TextInput source="email" />
        <TextInput source="telefono" />
        <TextInput source="whatsapp" />
        <TextInput source="redes.facebook" />
        <TextInput source="redes.instagram" />
        <TextInput source="ubicacion.iframeSrc" fullWidth />
      </SimpleForm>
    </Edit>
  );
}
