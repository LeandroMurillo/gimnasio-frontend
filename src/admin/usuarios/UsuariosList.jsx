import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  EditButton,
  DeleteButton,
  SimpleList
} from 'react-admin';
import { useMediaQuery } from '@mui/material';

export default function UsuariosList(props) {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <List
      {...props}
      title="Panel de Administración de Usuarios"
      perPage={10}
      sx={{ '& .RaList-actions': { mt: 2 } }} // Espacio arriba de los botones
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => `${record.nombre} ${record.apellido}`}
          secondaryText={(record) => record.correo}
          tertiaryText={(record) => `Rol: ${record.rol}`}
          linkType="edit"
        />
      ) : (
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
      )}
    </List>
  );
}
