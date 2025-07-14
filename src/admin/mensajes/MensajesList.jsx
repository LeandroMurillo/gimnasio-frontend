import { List, Datagrid, SimpleList, TextField, DateField, DeleteButton } from 'react-admin';
import { useMediaQuery } from '@mui/material';

export default function MensajesList(props) {
  const esPequenio = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <List {...props} title="Mensajes" sx={{ '& .RaList-actions': { mt: 2 } }}>
      {esPequenio ? (
        <SimpleList
          primaryText={(record) => record.nombre}
          secondaryText={(record) => record.email}
          tertiaryText={(record) =>
            new Date(record.fecha).toLocaleString('es-AR', {
              dateStyle: 'short',
              timeStyle: 'short'
            })
          }
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="nombre" />
          <TextField source="email" />
          <TextField source="mensaje" />
          <DateField source="fecha" showTime />
          <DeleteButton />
        </Datagrid>
      )}
    </List>
  );
}
