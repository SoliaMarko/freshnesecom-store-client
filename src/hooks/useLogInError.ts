import {ExtendedError} from '@/interfaces/error/extendedError.interface';
import {SerializedError} from '@reduxjs/toolkit';
import {useEffect} from 'react';

interface UseLogInErrorParams {
  isLoginError: boolean;
  loginError:
    | {
        status: number | undefined;
        data: {};
      }
    | SerializedError
    | undefined;
}

export const useLogInError = ({isLoginError: isError, loginError: error}: UseLogInErrorParams) => {
  useEffect(() => {
    if (isError) {
      alert((error as ExtendedError)?.data?.message || (error as SerializedError).message);
    }
  }, [isError]);
};
