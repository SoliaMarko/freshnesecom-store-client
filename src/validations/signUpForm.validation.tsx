import * as yup from 'yup';
import {validationError} from '@/constants/errorMessages.constant';
import {regexp} from '@/constants/regexps.constant';

export const SignUpFormSchema = yup.object().shape({
  firstName: yup.string().required(validationError.REQUIRED).min(2, validationError.MIN_LENGTH_2),
  lastName: yup.string().required(validationError.REQUIRED).min(2, validationError.MIN_LENGTH_2),
  email: yup.string().required(validationError.REQUIRED).email(),
  password: yup
    .string()
    .required(validationError.REQUIRED)
    .min(8, validationError.MIN_LENGTH_8)
    .matches(regexp.PASSWORD, validationError.INVALID_PASSWORD),
  phoneNumber: yup.string().optional().matches(regexp.PHONE_NUMBER, validationError.INVALID_PHONE_NUMBER)
});
