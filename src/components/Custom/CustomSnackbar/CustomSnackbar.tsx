import {ReactElement, useContext} from 'react';
import {Alert, Snackbar} from '@mui/material';
import {ToastContext} from '@/App';
import {useToast} from '@/hooks/useToast';

const CustomSnackbar = (): ReactElement | undefined => {
  const {toast, onHandleToast} = useContext(ToastContext);
  const {closeToast} = useToast({toast, onHandleToast});

  const handleClose = (): void => {
    closeToast();
  };

  if (!toast.isOpen) return;

  return (
    <Snackbar
      anchorOrigin={{vertical: toast.vertical || 'top', horizontal: toast.horizontal || 'right'}}
      open={toast.isOpen}
      onClose={handleClose}
      message={toast.message}
      autoHideDuration={3000}
      key={toast.message}
    >
      <Alert onClose={handleClose} severity={toast.status} variant={'filled'} className="w-full">
        {toast.message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
