import {
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput
} from 'react-admin';

export default function ClasesEdit(props) {
  return (
    <Edit {...props} title="Editar Clase">
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="nombre" label="Nombre de la clase" />
        <DateTimeInput source="fechaInicio" label="Inicio" />
        <DateTimeInput source="fechaFin" label="Fin" />
        <NumberInput source="cupoMax" label="Cupo máximo" />
        <TextInput source="color" label="Color" />

        <ReferenceInput source="instructor" reference="usuarios" label="Instructor">
          <SelectInput optionText={(record) => `${record.nombre} ${record.apellido}`} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
}
