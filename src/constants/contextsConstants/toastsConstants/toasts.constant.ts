import {ToastParamsType, ToastValuesType} from '@/interfaces/contexts/toastValuesType.interface';

export const initialToastValues: ToastValuesType = {
  message: '',
  isOpen: false,
  status: 'info',
  vertical: 'top',
  horizontal: 'right'
};

export const initialToastArguments: ToastParamsType = {toast: initialToastValues, onHandleToast: (): void => {}};
