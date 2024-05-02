import {ReactElement} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {LogInFormType} from '@/types/forms.type';
import {LogInFormSchema} from '@/validations/logInForm.validation';
import {logInFields} from '@/constants/formConstants/logInFields.constant';
import CustomForm from '../CustomForm';
import {LOGIN_DEFAULTS} from '@/utils/forms.utils';
import {useLoginUserMutation} from '@/store/services/authApi';
import {useLogInSuccess} from '@/hooks/useLogInSuccess';
import {useLogInError} from '@/hooks/useLogInError';

const LogInForm = (): ReactElement => {
  const formMethods = useForm<LogInFormType>({defaultValues: LOGIN_DEFAULTS, resolver: yupResolver(LogInFormSchema)});
  const [loginUser, {data: loginData, isSuccess: isLoginSuccess, isError: isLoginError, error: loginError}] = useLoginUserMutation();

  const onSubmitHandler = async (data: LogInFormType): Promise<void> => {
    const {email, password} = data;
    await loginUser({email, password});
    formMethods.reset(LOGIN_DEFAULTS);
  };

  useLogInSuccess({isLoginSuccess, loginData});
  useLogInError({isLoginError, loginError});

  return <CustomForm formMethods={formMethods} onSubmitHandler={onSubmitHandler} fields={logInFields} submitTitle="Log In" />;
};

export default LogInForm;
