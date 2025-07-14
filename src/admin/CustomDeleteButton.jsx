import { useDelete, useNotify, useRedirect } from 'react-admin';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

/**
 * Botón de eliminación con confirmación por diálogo.
 * @param {object} record - El recurso a eliminar.
 * @param {string} resource - El nombre del recurso en plural (ej. "clases", "usuarios").
 * @param {string} label - Nombre singular para mostrar en los textos (ej. "clase", "usuario").
 * @param {string} redirectPath - Ruta a la cual redirigir luego de la eliminación.
 */
export default function CustomDeleteButton({
  record,
  resource,
  label = 'elemento',
  redirectPath = `/admin/${resource}`
}) {
  const [open, setOpen] = useState(false);
  const [deleteOne] = useDelete();
  const notify = useNotify();
  const redirect = useRedirect();

  const handleDelete = async () => {
    try {
      await deleteOne(
        resource,
        { id: record.id, previousData: record },
        {
          onSuccess: () => {
            notify(
              `${label.charAt(0).toUpperCase() + label.slice(1)} "${record.nombre ?? record.id}" eliminado`,
              { type: 'success' }
            );
            redirect(redirectPath);
          },
          onError: (error) => {
            notify(`Error al eliminar ${label}: ${error.message}`, { type: 'error' });
          }
        }
      );
    } catch (err) {
      console.error(err);
    } finally {
      setOpen(false);
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => setOpen(true)}
        sx={{ ml: 2 }}>
        Borrar
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description">
        <DialogTitle id="confirm-dialog-title">
          ¿Borrar {label} "{record.nombre ?? record.id}"?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            ¿Estás seguro que quieres borrar este {label}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="error" variant="contained" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
