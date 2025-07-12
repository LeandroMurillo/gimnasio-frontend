import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin';
import ClasesListActions from './ClasesListActions';

export default function ClasesList(props) {
  return (
    <List {...props} title="Clases" actions={<ClasesListActions />}>
      <Datagrid>
        <TextField source="nombre" label="Nombre" />
        <DateField source="fechaInicio" label="Inicio" showTime />
        <DateField source="fechaFin" label="Fin" showTime />
        <TextField source="instructor.nombre" label="Instructor" />
        <TextField source="cupoMax" label="Cupo Máx." />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
