import {useEffect} from 'react';
import {UseFormReturn} from 'react-hook-form';
import {SignUpFormModel} from '@/models/SignUpForm.model';

interface UseSignUpSuccessParams {
  isSignupSuccess: boolean;
  formMethods: UseFormReturn<SignUpFormModel, undefined>;
}

export const useSignUpSuccess = ({isSignupSuccess, formMethods}: UseSignUpSuccessParams) => {
  useEffect(() => {
    if (isSignupSuccess) {
      alert('User Registered Successfully');
      formMethods.reset(new SignUpFormModel());
    }
  }, [isSignupSuccess]);
};
