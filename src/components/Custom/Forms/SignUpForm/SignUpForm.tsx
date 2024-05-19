import {ReactElement, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SignUpFormSchema} from '@/validations/signUpForm.validation';
import {SignUpFormModel} from '@/models/SignUpForm.model';
import {signUpFields} from '@/constants/formConstants/signUpFields.constant';
import {useLoginUserMutation, useRegisterUserMutation} from '@/store/services/authApi';
import CustomForm from '../CustomForm';
import {useLogInSuccess} from '@/hooks/useLogInSuccess';
import {useLogInError} from '@/hooks/useLogInError';
import {useSignUpError} from '@/hooks/useSignUpError';
import {useSignUpSuccess} from '@/hooks/useSignUpSuccess';
import {ToastContext} from '@/contexts/ToastProvider';

const SignUpForm = (): ReactElement => {
  const {toast, onHandleToast} = useContext(ToastContext);

  const formMethods = useForm<SignUpFormModel>({defaultValues: new SignUpFormModel(), resolver: yupResolver(SignUpFormSchema)});
  const [registerUser, {isSuccess: isSignupSuccess, isError: isSignupError, error: signupError}] = useRegisterUserMutation();
  const [loginUser, {data: loginData, isSuccess: isLoginSuccess, isError: isLoginError, error: loginError}] = useLoginUserMutation();

  useSignUpSuccess({isSignupSuccess, formMethods, toast, onHandleToast});
  useSignUpError({isSignupError, signupError, toast, onHandleToast});
  useLogInSuccess({isLoginSuccess, loginData, toast, onHandleToast});
  useLogInError({isLoginError, loginError, toast, onHandleToast});

  const onSubmitHandler = async (data: SignUpFormModel): Promise<void> => {
    const registrationResponse = await registerUser(data);
    if (registrationResponse?.error) return;
    await loginUser({
      email: data.email,
      password: data.password
    });
  };

  return <CustomForm<SignUpFormModel> formMethods={formMethods} onSubmitHandler={onSubmitHandler} fields={signUpFields} submitTitle="Sign Up" />;
};

export default SignUpForm;
