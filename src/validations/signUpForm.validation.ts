import * as yup from 'yup';
import {validationAuthError} from '@/constants/errorConstants/errorMessages.constant';
import {regexp} from '@/constants/validationConstants/regexps.constant';

export const SignUpFormSchema = yup.object().shape({
  firstName: yup.string().required(validationAuthError.REQUIRED).min(2, validationAuthError.MIN_LENGTH_2),
  lastName: yup.string().required(validationAuthError.REQUIRED).min(2, validationAuthError.MIN_LENGTH_2),
  email: yup.string().required(validationAuthError.REQUIRED).email(),
  password: yup
    .string()
    .required(validationAuthError.REQUIRED)
    .min(8, validationAuthError.MIN_LENGTH_8)
    .matches(regexp.PASSWORD, validationAuthError.INVALID_PASSWORD),
  confirmPassword: yup.string().oneOf([yup.ref('password')], validationAuthError.DONT_MATCH),
  phoneNumber: yup.string().optional().matches(regexp.PHONE_NUMBER, validationAuthError.INVALID_PHONE_NUMBER)
});
