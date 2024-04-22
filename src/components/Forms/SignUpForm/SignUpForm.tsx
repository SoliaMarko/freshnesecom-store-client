import {ReactElement} from 'react';
import {useForm} from 'react-hook-form';
import {Box} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import StyledTextField from '@/components/Inputs/StyledTextField';
import {SignUpFormSchema} from '@/validations/signUpForm.validation';
import {SignUpFormType} from '@/types/signUpFormType';

const SignUpForm = (): ReactElement => {
  const formMethods = useForm<SignUpFormType>({resolver: yupResolver(SignUpFormSchema)});
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = formMethods;

  const onSubmitHandler = (data: SignUpFormType): void => {
    console.log({data});
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col gap-5">
      <StyledTextField type="string" register={register} errors={errors} labeled required>
        First name
      </StyledTextField>
      <StyledTextField type="string" register={register} errors={errors} labeled required>
        Last name
      </StyledTextField>
      <StyledTextField type="email" register={register} errors={errors} labeled required>
        Email
      </StyledTextField>
      <StyledTextField type="password" register={register} errors={errors} labeled required>
        Password
      </StyledTextField>
      <StyledTextField type="password" register={register} errors={errors} labeled required>
        Re-enter password
      </StyledTextField>
      <StyledTextField type="tel" register={register} errors={errors} labeled>
        Phone number
      </StyledTextField>
      <Box className="flex justify-end">
        <PrimaryButton>Sign Up</PrimaryButton>
      </Box>
    </form>
  );
};

export default SignUpForm;
