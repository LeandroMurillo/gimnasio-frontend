import { List, Datagrid, TextField, DateField, DeleteButton } from 'react-admin';

export default function MensajesList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="nombre" />
        <TextField source="email" />
        <TextField source="mensaje" />
        <DateField source="fecha" showTime />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
