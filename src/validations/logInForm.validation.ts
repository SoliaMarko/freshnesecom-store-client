import * as yup from 'yup';
import {validationAuthError} from '@/constants/errorConstants/errorMessages.constant';

export const LogInFormSchema = yup.object().shape({
  email: yup.string().required(validationAuthError.REQUIRED).email(),
  password: yup.string().required(validationAuthError.REQUIRED)
});
