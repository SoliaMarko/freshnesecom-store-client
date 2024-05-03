import {ExtendedError} from '@/interfaces/error/extendedError.interface';
import {SerializedError} from '@reduxjs/toolkit';
import {useEffect} from 'react';

type ErrorType = ExtendedError | SerializedError;

interface UseLogInErrorParams {
  isLoginError: boolean;
  loginError?: ErrorType;
}

export const useLogInError = ({isLoginError: isError, loginError: error}: UseLogInErrorParams) => {
  useEffect(() => {
    if (isError) {
      alert((error as ExtendedError)?.data?.message || (error as SerializedError).message);
    }
  }, [isError]);
};
