import {ReactElement, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {LogInFormSchema} from '@/validations/logInForm.validation';
import {LogInFormModel} from '@/models/auth/LogInForm.model';
import {logInFields} from '@/constants/formConstants/logInFields.constant';
import CustomForm from '../CustomForm';
import {useLoginUserMutation} from '@/store/services/authApi';
import {useLogInSuccess} from '@/hooks/auth/useLogInSuccess';
import {useLogInError} from '@/hooks/auth/useLogInError';
import {ToastContext} from '@/contexts/ToastProvider';

const LogInForm = (): ReactElement => {
  const {toast, onHandleToast} = useContext(ToastContext);
  const formMethods = useForm<LogInFormModel>({defaultValues: new LogInFormModel(), resolver: yupResolver(LogInFormSchema)});
  const [loginUser, {data: loginData, isSuccess: isLoginSuccess, isError: isLoginError, error: loginError}] = useLoginUserMutation();

  useLogInSuccess({isLoginSuccess, loginData, formMethods, toast, onHandleToast});
  useLogInError({isLoginError, loginError, toast, onHandleToast});

  const onSubmitHandler = async (data: LogInFormModel): Promise<void> => {
    const {email, password} = data;
    await loginUser({email, password});
  };

  return <CustomForm<LogInFormModel> formMethods={formMethods} onSubmitHandler={onSubmitHandler} fields={logInFields} submitTitle="Log In" />;
};

export default LogInForm;
