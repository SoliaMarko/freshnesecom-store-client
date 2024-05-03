import {ReactElement} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {LogInFormType} from '@/types/forms.type';
import {LogInFormSchema} from '@/validations/logInForm.validation';
import {logInFields} from '@/constants/formConstants/logInFields.constant';
import CustomForm from '../CustomForm';
import {LOGIN_DEFAULTS} from '@/utils/forms.utils';

const LogInForm = (): ReactElement => {
  const formMethods = useForm<LogInFormType>({defaultValues: LOGIN_DEFAULTS, resolver: yupResolver(LogInFormSchema)});

  const onSubmitHandler = async (data: LogInFormType): Promise<void> => {
    console.log(data);
    formMethods.reset(LOGIN_DEFAULTS);
  };

  return <CustomForm formMethods={formMethods} onSubmitHandler={onSubmitHandler} fields={logInFields} submitTitle="Log In" />;
};

export default LogInForm;
