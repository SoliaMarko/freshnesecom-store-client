import {ToastValuesType} from '@/interfaces/features/toastValuesType.interface';

export interface UseToastProps {
  toast: ToastValuesType;
  onHandleToast: (value: ToastValuesType) => void;
}

export const useToast = ({toast, onHandleToast}: UseToastProps) => {
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
    console.log('hi from useToast');
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
