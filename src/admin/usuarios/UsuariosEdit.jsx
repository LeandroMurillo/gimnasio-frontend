import { Edit, SimpleForm, TextInput, BooleanInput, useRecordContext } from 'react-admin';

import CustomToolbar from '../CustomToolbar';

const ADMIN_ROOT_ID = '68728251b003a6f29d060bf4';

function UsuarioCamposForm() {
  const record = useRecordContext();
  const soloLectura = record?.id === ADMIN_ROOT_ID;

  return (
    <>
      <TextInput source="nombre" label="Nombre" disabled={soloLectura} fullWidth />
      <TextInput source="apellido" label="Apellido" disabled={soloLectura} fullWidth />
      <TextInput source="correo" label="Correo" disabled={soloLectura} fullWidth />
      <TextInput source="telefono" label="Teléfono" disabled={soloLectura} fullWidth />
      <TextInput source="rol" label="Rol" disabled={soloLectura} fullWidth />
      <BooleanInput source="estado" label="Estado" disabled={soloLectura} />
    </>
  );
}

export default function UsuariosEdit(props) {
  return (
    <Edit {...props} title="Editar Usuario" actions={false}>
      <SimpleForm
        toolbar={
          <CustomToolbar
            showDelete
            useCustomDelete
            resource="usuarios"
            label="usuario"
            resourcePath="/admin/usuarios"
          />
        }>
        <UsuarioCamposForm />
      </SimpleForm>
    </Edit>
  );
}
