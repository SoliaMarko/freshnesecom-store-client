import {ReactElement} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {LogInFormSchema} from '@/validations/logInForm.validation';
import {LogInFormModel} from '@/models/LogInForm.model';
import {logInFields} from '@/constants/formConstants/logInFields.constant';
import CustomForm from '../CustomForm';
import {useLoginUserMutation} from '@/store/services/authApi';
import {useLogInSuccess} from '@/hooks/useLogInSuccess';
import {useLogInError} from '@/hooks/useLogInError';

const LogInForm = (): ReactElement => {
  const formMethods = useForm<LogInFormModel>({defaultValues: new LogInFormModel(), resolver: yupResolver(LogInFormSchema)});
  const [loginUser, {data: loginData, isSuccess: isLoginSuccess, isError: isLoginError, error: loginError}] = useLoginUserMutation();

  useLogInSuccess({isLoginSuccess, loginData, formMethods});
  useLogInError({isLoginError, loginError});

  const onSubmitHandler = async (data: LogInFormModel): Promise<void> => {
    const {email, password} = data;
    await loginUser({email, password});
  };

  return <CustomForm<LogInFormModel> formMethods={formMethods} onSubmitHandler={onSubmitHandler} fields={logInFields} submitTitle="Log In" />;
};

export default LogInForm;
