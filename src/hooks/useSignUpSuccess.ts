import {useEffect} from 'react';
import {UseFormReturn} from 'react-hook-form';
import {SIGNUP_DEFAULTS} from '@/utils/forms.utils';
import {SignUpFormType} from '@/types/forms.type';

interface UseSignUpSuccessParams {
  isSignupSuccess: boolean;
  formMethods: UseFormReturn<SignUpFormType, undefined>;
}

export const useSignUpSuccess = ({isSignupSuccess, formMethods}: UseSignUpSuccessParams) => {
  useEffect(() => {
    if (isSignupSuccess) {
      alert('User Registered Successfully');
      formMethods.reset(SIGNUP_DEFAULTS);
    }
  }, [isSignupSuccess]);
};
