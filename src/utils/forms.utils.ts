import {LogInFormType, SignUpFormType} from '@/types/forms.type';

export const SIGNUP_DEFAULTS: SignUpFormType = {
  confirmPassword: '',
  phoneNumber: '',
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

export const LOGIN_DEFAULTS: LogInFormType = {
  email: '',
  password: ''
};
