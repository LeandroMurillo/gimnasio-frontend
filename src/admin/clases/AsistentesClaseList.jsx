import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { List, Datagrid, SimpleList, TextField } from 'react-admin';
import { useMediaQuery } from '@mui/material';

export default function AsistentesClaseList() {
  const { id } = useParams();
  const [asistentes, setAsistentes] = useState([]);
  const esPequenio = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/clases/${id}/asistentes`)
      .then((res) => res.json())
      .then((data) => setAsistentes(data))
      .catch((err) => console.error('Error al cargar asistentes:', err));
  }, [id]);

  return (
    <List
      title="Asistentes de la clase"
      actions={null}
      pagination={false}
      exporter={false}
      resource="usuarios"
      hasCreate={false}
      sx={{ mt: 2 }} // Margen superior para separar del AppBar
    >
      {esPequenio ? (
        <SimpleList
          data={asistentes}
          primaryText={(record) => `${record.nombre} ${record.apellido}`}
          secondaryText={(record) => record.email}
          tertiaryText={(record) => record.plan?.nombre || 'Sin plan'}
        />
      ) : (
        <Datagrid data={asistentes}>
          <TextField source="nombre" />
          <TextField source="apellido" />
          <TextField source="email" />
          <TextField source="plan.nombre" label="Plan" />
        </Datagrid>
      )}
    </List>
  );
}
