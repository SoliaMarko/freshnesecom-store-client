import * as yup from 'yup';
import {validationError} from '@/constants/errorConstants/errorMessages.constant';
import {regexp} from '@/constants/validationConstants/regexps.constant';
import {MIN_PASSWORD_LENGTH, MIN_TEXT_LENGTH} from '@/constants/validationConstants/validation.constant';

export const SignUpFormSchema = yup.object().shape({
  firstName: yup.string().required(validationError.REQUIRED).min(MIN_TEXT_LENGTH, validationError.MIN_TEXT_LENGTH),
  lastName: yup.string().required(validationError.REQUIRED).min(MIN_TEXT_LENGTH, validationError.MIN_TEXT_LENGTH),
  email: yup.string().required(validationError.REQUIRED).email(),
  password: yup
    .string()
    .required(validationError.REQUIRED)
    .min(MIN_PASSWORD_LENGTH, validationError.MIN_PASSWORD_LENGTH)
    .matches(regexp.PASSWORD, validationError.INVALID_PASSWORD),
  confirmPassword: yup.string().oneOf([yup.ref('password')], validationError.DONT_MATCH),
  phoneNumber: yup.string().optional().matches(regexp.PHONE_NUMBER, validationError.INVALID_PHONE_NUMBER)
});
