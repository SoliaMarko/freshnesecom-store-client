import {InferType} from 'yup';
import {SignUpFormSchema} from '@/validations/signUpForm.validation';

export type SignUpFormType = InferType<typeof SignUpFormSchema>;
