import {
  Create,
  SimpleForm,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  useInput
} from 'react-admin';
import { TextField } from '@mui/material';

// Componente para selector de color
function ColorPickerInput({ source, label }) {
  const {
    field,
    fieldState: { error },
    isRequired
  } = useInput({ source });

  return (
    <TextField
      {...field}
      type="color"
      label={label}
      required={isRequired}
      error={!!error}
      helperText={error?.message}
      InputLabelProps={{ shrink: true }}
      sx={{ width: 140 }}
    />
  );
}

// Validación de campos
function validateClase(values) {
  const errors = {};

  // Validar nombre obligatorio
  if (!values.nombre || typeof values.nombre !== 'string' || !values.nombre.trim()) {
    errors.nombre = 'El nombre de la clase es obligatorio';
  }

  // Validación cruzada de fechas
  if (values.fechaInicio && values.fechaFin) {
    const inicio = new Date(values.fechaInicio);
    const fin = new Date(values.fechaFin);
    if (fin <= inicio) {
      errors.fechaFin = 'La fecha de fin debe ser posterior a la fecha de inicio';
    }
  }

  // Validar cupo máximo
  if (values.cupoMax === undefined || values.cupoMax === null || values.cupoMax <= 0) {
    errors.cupoMax = 'El cupo máximo debe ser mayor que cero';
  }

  return errors;
}

export default function ClasesCreate(props) {
  return (
    <Create {...props} title="Crear Clase">
      <SimpleForm validate={validateClase} defaultValues={{ cupoMax: 30 }}>
        <TextInput
          source="nombre"
          label="Nombre de la clase"
          validate={(value) => (value?.trim() ? undefined : 'Este campo es obligatorio')}
        />
        <DateTimeInput source="fechaInicio" label="Inicio" />
        <DateTimeInput source="fechaFin" label="Fin" />
        <NumberInput source="cupoMax" label="Cupo máximo" />
        <ColorPickerInput source="color" label="Color de fondo" />

        <ReferenceInput
          source="instructor"
          reference="usuarios"
          label="Instructor"
          filter={{ rol: 'instructor' }}>
          <SelectInput
            optionText={(record) =>
              record ? `${record.nombre ?? ''} ${record.apellido ?? ''}`.trim() : ''
            }
          />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}
