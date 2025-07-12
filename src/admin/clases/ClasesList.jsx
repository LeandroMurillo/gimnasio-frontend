import {
  List,
  Datagrid,
  SimpleList,
  TextField,
  DateField,
  EditButton,
  DeleteButton
} from 'react-admin';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ClasesListActions from './ClasesListActions';

export default function ClasesList(props) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <List
      {...props}
      title="Clases"
      actions={<ClasesListActions />}
      sx={{ '& .RaList-actions': { mt: 2 } }} // Espacio entre AppBar y acciones
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.nombre}
          secondaryText={(record) =>
            new Date(record.fechaInicio).toLocaleString('es-AR', {
              day: '2-digit',
              month: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            })
          }
          tertiaryText={(record) => `Instructor: ${record.instructor?.nombre}`}
          linkType="edit"
        />
      ) : (
        <Datagrid>
          <TextField source="nombre" label="Nombre" />
          <DateField source="fechaInicio" label="Inicio" showTime />
          <DateField source="fechaFin" label="Fin" showTime />
          <TextField source="instructor.nombre" label="Instructor" />
          <TextField source="cupoMax" label="Cupo Máx." />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      )}
    </List>
  );
}
