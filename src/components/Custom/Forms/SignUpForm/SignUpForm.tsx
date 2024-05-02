import {ReactElement} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SignUpFormSchema} from '@/validations/signUpForm.validation';
import {SignUpFormType} from '@/types/forms.type';
import {signUpFields} from '@/constants/formConstants/signUpFields.constant';
import {useLoginUserMutation, useRegisterUserMutation} from '@/store/services/authApi';
import CustomForm from '../CustomForm';
import {SIGNUP_DEFAULTS} from '@/utils/forms.utils';
import {useLogInSuccess} from '@/hooks/useLogInSuccess';
import {useLogInError} from '@/hooks/useLogInError';
import {useSignUpError} from '@/hooks/useSignUpError';
import {useSignUpSuccess} from '@/hooks/useSignUpSuccess';

const SignUpForm = (): ReactElement => {
  const formMethods = useForm<SignUpFormType>({defaultValues: SIGNUP_DEFAULTS, resolver: yupResolver(SignUpFormSchema)});
  const [registerUser, {isSuccess: isSignupSuccess, isError: isSignupError, error: signupError}] = useRegisterUserMutation();
  const [loginUser, {data: loginData, isSuccess: isLoginSuccess, isError: isLoginError, error: loginError}] = useLoginUserMutation();

  const onSubmitHandler = async (data: SignUpFormType): Promise<void> => {
    await registerUser(data);
    await loginUser({
      email: data.email,
      password: data.password
    });
  };

  useSignUpSuccess({isSignupSuccess, formMethods});
  useSignUpError({isSignupError, signupError});
  useLogInSuccess({isLoginSuccess, loginData});
  useLogInError({isLoginError, loginError});

  return <CustomForm formMethods={formMethods} onSubmitHandler={onSubmitHandler} fields={signUpFields} submitTitle="Sign Up" />;
};

export default SignUpForm;
