import { Toolbar, SaveButton, DeleteButton, useRecordContext, useRedirect } from 'react-admin';
import { Button, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomDeleteButton from './CustomDeleteButton'; // ✅ nuevo nombre

export default function CustomToolbar({
  showDelete = false,
  showAsistentes = false,
  resourcePath = '/admin/clases',
  useCustomDelete = false,
  resource = 'clases',
  label = 'clase'
}) {
  const record = useRecordContext();
  const redirect = useRedirect();

  return (
    <Toolbar>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1}
        useFlexGap
        sx={{ width: '100%', justifyContent: 'flex-end' }}>
        <SaveButton />
        {record?.id && showAsistentes && (
          <Button
            variant="outlined"
            onClick={() => redirect(`${resourcePath}/${record.id}/asistentes`)}>
            Ver Asistentes
          </Button>
        )}
        {record?.id &&
          showDelete &&
          (useCustomDelete ? (
            <CustomDeleteButton
              record={record}
              resource={resource}
              label={label}
              redirectPath={resourcePath}
            />
          ) : (
            <DeleteButton record={record} resource={resource} mutationMode="pessimistic" />
          ))}
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => redirect(resourcePath)}>
          Volver
        </Button>
      </Stack>
    </Toolbar>
  );
}
