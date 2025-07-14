import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { List, Datagrid, SimpleList, TextField } from 'react-admin';
import { useMediaQuery, Button, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function AsistentesClaseList() {
  const { id } = useParams();
  const [asistentes, setAsistentes] = useState([]);
  const esPequenio = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/clases/${id}/asistentes`)
      .then((res) => res.json())
      .then((data) => setAsistentes(data))
      .catch((err) => console.error('Error al cargar asistentes:', err));
  }, [id]);

  return (
    <>
      <List
        title="Asistentes de la clase"
        actions={null}
        pagination={false}
        exporter={false}
        resource="usuarios"
        hasCreate={false}
        sx={{ mt: 2 }}>
        {esPequenio ? (
          <SimpleList
            data={asistentes}
            rowClick={false}
            primaryText={(record) => `${record.nombre} ${record.apellido}`}
            secondaryText={(record) => record.email}
            tertiaryText={(record) => record.plan?.nombre || 'Sin plan'}
          />
        ) : (
          <Datagrid data={asistentes} rowClick={false}>
            <TextField source="nombre" />
            <TextField source="apellido" />
            <TextField source="email" />
            <TextField source="plan.nombre" label="Plan" />
          </Datagrid>
        )}
      </List>
      <Stack direction="row" justifyContent="flex-start" sx={{ mt: 2 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/admin/clases')}>
          Volver
        </Button>
      </Stack>
    </>
  );
}
