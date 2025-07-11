import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export default function AsistentesClaseList() {
  const { id } = useParams();
  const [asistentes, setAsistentes] = useState([]);

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
      resource="usuarios"
      exporter={false}>
      <Datagrid data={asistentes}>
        <TextField source="nombre" />
        <TextField source="apellido" />
        <TextField source="email" />
        <TextField source="plan.nombre" label="Plan" />
      </Datagrid>
    </List>
  );
}
