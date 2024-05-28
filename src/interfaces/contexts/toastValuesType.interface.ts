import {SnackbarOrigin} from '@mui/material';

export interface ToastValuesType {
  message: string;
  isOpen: boolean;
  status?: 'error' | 'warning' | 'info' | 'success';
  vertical?: SnackbarOrigin['vertical'];
  horizontal?: SnackbarOrigin['horizontal'];
}

export interface ToastParamsType {
  toast: ToastValuesType;
  onHandleToast: (values: ToastValuesType) => void;
}
