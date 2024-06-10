import {ExtendedError} from '@/interfaces/error/extendedError.interface';
import {SerializedError} from '@reduxjs/toolkit';
import {useEffect} from 'react';
import {UseToastProps, useToast} from '../global/useToast';

type ErrorType = ExtendedError | SerializedError;

interface UseLogInErrorParams extends UseToastProps {
  isLoginError: boolean;
  loginError?: ErrorType;
}

export const useLogInError = ({isLoginError: isError, loginError: error, toast, onHandleToast}: UseLogInErrorParams): void => {
  const {openToastError} = useToast({toast, onHandleToast});

  useEffect(() => {
    if (isError) {
      openToastError((error as ExtendedError)?.data?.message || (error as SerializedError).message || '');
    }
  }, [isError]);
};
