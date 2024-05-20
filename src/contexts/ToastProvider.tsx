import {ReactElement, ReactNode, createContext, useCallback, useState} from 'react';
import {initialToastArguments, initialToastValues} from '@/constants/toastsConstants/toasts.constant';
import {ToastParamsType, ToastValuesType} from '@/interfaces/features/toastValuesType.interface';

export const ToastContext = createContext(initialToastArguments);

interface ToastProviderProps {
  children: ReactNode;
}

const ToastProvider = ({children}: ToastProviderProps): ReactElement => {
  const [toast, setToast] = useState<ToastValuesType>(initialToastValues);

  const handleToast = useCallback((value: ToastValuesType): void => {
    setToast(() => {
      return value;
    });
  }, []);

  const toastValues: ToastParamsType = {
    toast: toast,
    onHandleToast: handleToast
  };

  return <ToastContext.Provider value={toastValues}>{children}</ToastContext.Provider>;
};

export default ToastProvider;
