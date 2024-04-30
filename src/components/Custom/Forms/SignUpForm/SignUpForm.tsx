import {ReactElement, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SignUpFormSchema} from '@/validations/signUpForm.validation';
import {SignUpFormType} from '@/types/forms.type';
import {signUpFields} from '@/constants/formConstants/signUpFields.constant';
import {useRegisterUserMutation} from '@/store/services/authApi';
import {userRoutes} from '@/constants/globalConstants/global.constant';
import CustomForm from '../CustomForm';
import {SerializedError} from '@reduxjs/toolkit';
import {SIGNUP_DEFAULTS} from '@/utils/forms.utils';
import {ExtendedError} from '@/interfaces/error/extendedError.interface';

const SignUpForm = (): ReactElement => {
  const formMethods = useForm<SignUpFormType>({defaultValues: SIGNUP_DEFAULTS, resolver: yupResolver(SignUpFormSchema)});
  const [registerUser, {isSuccess: isSignupSuccess, isError: isSignupError, error: signupError}] = useRegisterUserMutation();
  const navigate = useNavigate();

  const onSubmitHandler = async (data: SignUpFormType): Promise<void> => {
    await registerUser(data);
  };

  useEffect(() => {
    if (isSignupSuccess) {
      alert('User Registered Successfully');
      navigate(`/${userRoutes.USER}/${userRoutes.PROFILE}`);
      formMethods.reset(SIGNUP_DEFAULTS);
    }
  }, [isSignupSuccess]);

  useEffect(() => {
    if (isSignupError) {
      const error = signupError as ExtendedError | SerializedError;
      alert((error as ExtendedError)?.data?.message || error.message);
    }
  }, [isSignupError]);

  return <CustomForm formMethods={formMethods} onSubmitHandler={onSubmitHandler} fields={signUpFields} submitTitle="Sign Up" />;
};

export default SignUpForm;
