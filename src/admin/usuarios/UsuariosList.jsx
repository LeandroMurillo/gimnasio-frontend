import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  EditButton,
  DeleteButton
} from 'react-admin';

export default function UsuariosList(props) {
  return (
    <List {...props} title="Panel de Administración de Usuarios" perPage={10}>
      <Datagrid rowClick="edit">
        <TextField source="id" label="ID" />
        <TextField source="nombre" label="Nombre" />
        <TextField source="apellido" label="Apellido" />
        <EmailField source="correo" label="Correo" />
        <TextField source="rol" label="Rol" />
        <BooleanField source="estado" label="Estado" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
