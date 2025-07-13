import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  DeleteButton,
  Toolbar,
  useRecordContext
} from 'react-admin';

const ADMIN_ROOT_ID = '68728251b003a6f29d060bf4';

function CustomToolbar() {
  const record = useRecordContext();
  if (!record || record.id === ADMIN_ROOT_ID) return null;

  return (
    <Toolbar>
      <DeleteButton />
    </Toolbar>
  );
}

function UsuarioCamposForm() {
  const record = useRecordContext();
  const soloLectura = record?.id === ADMIN_ROOT_ID;

  return (
    <>
      <TextInput source="nombre" label="Nombre" disabled={soloLectura} fullWidth />
      <TextInput source="apellido" label="Apellido" disabled={soloLectura} fullWidth />
      <TextInput source="correo" label="Correo" disabled={soloLectura} fullWidth />
      <TextInput source="rol" label="Rol" disabled={soloLectura} fullWidth />
      <BooleanInput source="estado" label="Estado" disabled={soloLectura} />
    </>
  );
}

export default function UsuariosEdit(props) {
  return (
    <Edit {...props} title="Editar Usuario" actions={false}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <UsuarioCamposForm />
      </SimpleForm>
    </Edit>
  );
}
