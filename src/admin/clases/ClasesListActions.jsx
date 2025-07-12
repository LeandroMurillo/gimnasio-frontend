import { TopToolbar, CreateButton } from 'react-admin';
import { Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from 'react-router-dom';

export default function ClasesListActions() {
  const navigate = useNavigate();

  return (
    <TopToolbar>
      <CreateButton />
      <Button
        variant="contained"
        color="primary"
        startIcon={<CalendarMonthIcon />}
        onClick={() => navigate('/admin/calendario')}>
        Ver calendario
      </Button>
    </TopToolbar>
  );
}
