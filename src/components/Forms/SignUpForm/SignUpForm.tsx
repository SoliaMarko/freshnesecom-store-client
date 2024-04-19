import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import TextFieldWithLabel from '@/components/Fields/TextFieldWithLabel';
import {SignUpFormValues} from '@/interfaces/form/signUpFormValues.interface';
import {Box} from '@mui/material';
import {signUpSchema} from '@/validations/signUpForm.validation';

const SignUpForm = (): JSX.Element => {
  const formMethods = useForm<SignUpFormValues>({resolver: yupResolver(signUpSchema)});
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = formMethods;

  const onSubmitHandler = (data: SignUpFormValues): void => {
    console.log({data});
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} style={{display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '360px'}}>
      <TextFieldWithLabel type="string" required={true} register={register} errors={errors}>
        First name
      </TextFieldWithLabel>
      <TextFieldWithLabel type="string" required={true} register={register} errors={errors}>
        Last name
      </TextFieldWithLabel>
      <TextFieldWithLabel type="email" required={true} register={register} errors={errors}>
        Email
      </TextFieldWithLabel>
      <TextFieldWithLabel type="password" required={true} register={register} errors={errors}>
        Password
      </TextFieldWithLabel>
      <TextFieldWithLabel type="tel" register={register} errors={errors}>
        Phone number
      </TextFieldWithLabel>
      <Box className="flex justify-end">
        <PrimaryButton>Sign Up</PrimaryButton>
      </Box>
    </form>
  );
};

export default SignUpForm;
