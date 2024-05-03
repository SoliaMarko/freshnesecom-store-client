import {ExtendedError} from '@/interfaces/error/extendedError.interface';
import {SerializedError} from '@reduxjs/toolkit';
import {useEffect} from 'react';

type ErrorType = ExtendedError | SerializedError;

interface UseSignUpErrorParams {
  isSignupError: boolean;
  signupError?: ErrorType;
}

export const useSignUpError = ({isSignupError: isError, signupError: error}: UseSignUpErrorParams) => {
  useEffect(() => {
    if (isError) {
      alert((error as ExtendedError)?.data?.message || (error as SerializedError).message);
    }
  }, [isError]);
};
