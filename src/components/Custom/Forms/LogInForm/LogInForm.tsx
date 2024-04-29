import {ReactElement} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {LogInFormType} from '@/types/forms.type';
import {LogInFormSchema} from '@/validations/logInForm.validation';
import {logInFields} from '@/constants/formConstants/logInFields.constant';
import CustomForm from '../CustomForm';

const LogInForm = (): ReactElement => {
  const formMethods = useForm<LogInFormType>({resolver: yupResolver(LogInFormSchema)});

  const onSubmitHandler = async (data: LogInFormType): Promise<void> => {
    console.log(data);
    formMethods.reset();
  };

  return <CustomForm formMethods={formMethods} onSubmitHandler={onSubmitHandler} fields={logInFields} submitTitle="Log In" />;
};

export default LogInForm;
