import {useEffect} from 'react';
import {UseFormReturn} from 'react-hook-form';
import {SignUpFormModel} from '@/models/SignUpForm.model';
import {UseToastProps, useToast} from './useToast';
import {responseSuccess} from '@/constants/successConstants/success.constant';

interface UseSignUpSuccessParams extends UseToastProps {
  isSignupSuccess: boolean;
  formMethods: UseFormReturn<SignUpFormModel, undefined>;
}

export const useSignUpSuccess = ({isSignupSuccess, formMethods, toast, onHandleToast}: UseSignUpSuccessParams) => {
  const {openToastSuccess} = useToast({toast, onHandleToast});

  useEffect(() => {
    if (isSignupSuccess) {
      openToastSuccess(responseSuccess.SIGNUP);
      formMethods.reset(new SignUpFormModel());
    }
  }, [isSignupSuccess]);
};
