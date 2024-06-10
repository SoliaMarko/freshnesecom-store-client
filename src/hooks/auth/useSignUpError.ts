import {ExtendedError} from '@/interfaces/error/extendedError.interface';
import {SerializedError} from '@reduxjs/toolkit';
import {useEffect} from 'react';
import {UseToastProps, useToast} from '../global/useToast';

type ErrorType = ExtendedError | SerializedError;

interface UseSignUpErrorParams extends UseToastProps {
  isSignupError: boolean;
  signupError?: ErrorType;
}

export const useSignUpError = ({isSignupError: isError, signupError: error, toast, onHandleToast}: UseSignUpErrorParams): void => {
  const {openToastError} = useToast({toast, onHandleToast});

  useEffect(() => {
    if (isError) {
      openToastError((error as ExtendedError)?.data?.message || (error as SerializedError).message || '');
    }
  }, [isError]);
};
