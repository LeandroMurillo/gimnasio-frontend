import { Edit, SimpleForm, TextInput, Toolbar, SaveButton } from 'react-admin';

const CustomToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export default function ConfiguracionEdit(props) {
  return (
    <Edit {...props} title="Editar información general">
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput source="nombre" label="Nombre del gimnasio" />
        <TextInput source="direccion" label="Dirección" />
        <TextInput source="ciudad" label="Ciudad" />
        <TextInput source="email" label="Correo electrónico" />
        <TextInput source="telefono" label="Teléfono" />
        <TextInput source="whatsapp" label="WhatsApp" />
        <TextInput source="redes.facebook" label="Facebook" />
        <TextInput source="redes.instagram" label="Instagram" />
        <TextInput source="ubicacion.iframeSrc" label="Mapa (iframe)" fullWidth />
      </SimpleForm>
    </Edit>
  );
}
