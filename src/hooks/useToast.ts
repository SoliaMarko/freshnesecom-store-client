import {ToastValuesType} from '@/interfaces/contexts/toastValuesType.interface';

export interface UseToastProps {
  toast: ToastValuesType;
  onHandleToast: (value: ToastValuesType) => void;
}

type OpenToastHandler = (message: string) => void;
type CloseToastHandler = () => void;

interface UseToastReturnValues {
  toast: ToastValuesType;
  openToastSuccess: OpenToastHandler;
  openToastInfo: OpenToastHandler;
  openToastWarning: OpenToastHandler;
  openToastError: OpenToastHandler;
  closeToast: CloseToastHandler;
}

export const useToast = ({toast, onHandleToast}: UseToastProps): UseToastReturnValues => {
  const openToastSuccess = (message: string) => {
    onHandleToast({
      message,
      isOpen: true,
      status: 'success'
    });
  };

  const openToastInfo = (message: string) => {
    onHandleToast({
      message,
      isOpen: true,
      status: 'info'
    });
  };

  const openToastWarning = (message: string) => {
    onHandleToast({
      message,
      isOpen: true,
      status: 'warning'
    });
  };

  const openToastError = (message: string) => {
    onHandleToast({
      message,
      isOpen: true,
      status: 'error'
    });
  };

  const closeToast = () => {
    onHandleToast({
      message: '',
      isOpen: false,
      status: 'info'
    });
  };

  return {
    toast,
    openToastSuccess,
    openToastInfo,
    openToastWarning,
    openToastError,
    closeToast
  };
};
