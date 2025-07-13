import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  SimpleList,
  useRecordContext
} from 'react-admin';
import { useMediaQuery, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ADMIN_ROOT_ID = '68728251b003a6f29d060bf4';

function CustomActions() {
  const record = useRecordContext();

  if (!record || record.id === ADMIN_ROOT_ID) return null;

  return (
    <>
      <Button
        color="primary"
        size="small"
        href={`/admin/usuarios/${record.id}`}
        startIcon={<EditIcon />}>
        EDITAR
      </Button>
      <Button
        color="error"
        size="small"
        href={`/admin/usuarios/${record.id}/delete`}
        startIcon={<DeleteIcon />}>
        BORRAR
      </Button>
    </>
  );
}

export default function UsuariosList(props) {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <List
      {...props}
      title="Panel de Administración de Usuarios"
      perPage={10}
      sx={{ '& .RaList-actions': { mt: 2 } }}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => `${record.nombre} ${record.apellido}`}
          secondaryText={(record) => record.correo}
          tertiaryText={(record) => `Teléfono: ${record.telefono} | Rol: ${record.rol}`}
          linkType={(record) => (record.id === ADMIN_ROOT_ID ? false : 'edit')}
        />
      ) : (
        <Datagrid>
          <TextField source="id" label="ID" />
          <TextField source="nombre" label="Nombre" />
          <TextField source="apellido" label="Apellido" />
          <EmailField source="correo" label="Correo" />
          <TextField source="telefono" label="Teléfono" />
          <TextField source="rol" label="Rol" />
          <BooleanField source="estado" label="Estado" />
          <CustomActions />
        </Datagrid>
      )}
    </List>
  );
}
