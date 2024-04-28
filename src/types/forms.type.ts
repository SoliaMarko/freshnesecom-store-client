import {InferType} from 'yup';
import {SignUpFormSchema} from '@/validations/signUpForm.validation';
import {LogInFormSchema} from '@/validations/logInForm.validation';

export type SignUpFormType = InferType<typeof SignUpFormSchema>;

export type LogInFormType = InferType<typeof LogInFormSchema>;

export type FormType = SignUpFormType | LogInFormType;
