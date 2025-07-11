import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export default function ClasesList(props) {
  return (
    <List {...props} title="Clases">
      <Datagrid>
        <TextField source="id" />
        <TextField source="titulo" />
        <DateField source="start" label="Inicio" />
        <DateField source="end" label="Fin" />
        <TextField source="backgroundColor" label="Color" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
