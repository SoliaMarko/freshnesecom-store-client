import {ReactElement} from 'react';
import {useForm} from 'react-hook-form';
import {Box} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import StyledTextField from '@/components/Inputs/StyledTextField';
import {SignUpFormSchema} from '@/validations/signUpForm.validation';
import {SignUpFormType} from '@/types/signUpForm.type';
import {signUpFields} from '@/constants/signUpFields.constant';

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
      {signUpFields.map(
        (field, index): ReactElement => (
          <StyledTextField
            key={`${index}-${field}`}
            type={field.type}
            register={register}
            errors={errors}
            label={field.label}
            placeholder={field.placeholder}
            required
          >
            {field.field}
          </StyledTextField>
        )
      )}
      <Box className="flex justify-end">
        <PrimaryButton>Sign Up</PrimaryButton>
      </Box>
    </form>
  );
};

export default SignUpForm;
