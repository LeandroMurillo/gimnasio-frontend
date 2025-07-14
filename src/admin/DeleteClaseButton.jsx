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

export default function DeleteClaseButton({ record }) {
  const [open, setOpen] = useState(false);
  const [deleteOne] = useDelete();
  const notify = useNotify();
  const redirect = useRedirect();

  const handleDelete = async () => {
    try {
      await deleteOne(
        'clases',
        { id: record.id, previousData: record },
        {
          onSuccess: () => {
            notify(`Clase "${record.nombre}" eliminada`, { type: 'success' });
            redirect('/admin/clases');
          },
          onError: (error) => {
            notify(`Error al eliminar clase: ${error.message}`, { type: 'error' });
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
        <DialogTitle id="confirm-dialog-title">Borrar clase "{record.nombre}"</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            ¿Estás seguro que quieres borrar esta clase?
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
