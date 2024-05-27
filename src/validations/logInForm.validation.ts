import * as yup from 'yup';
import {validationError} from '@/constants/errorConstants/errorMessages.constant';

export const LogInFormSchema = yup.object().shape({
  email: yup.string().required(validationError.REQUIRED).email(),
  password: yup.string().required(validationError.REQUIRED)
});
