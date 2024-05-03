import {FormFields} from '@/interfaces/form/formFields.interface';

export const signUpFields: FormFields[] = [
  {type: 'string', field: 'firstName', label: 'First name'},
  {type: 'string', field: 'lastName', label: 'Last name'},
  {type: 'email', field: 'email', label: 'Email'},
  {type: 'password', field: 'password', label: 'Password', placeholder: 'At least 8 characters'},
  {type: 'password', field: 'confirmPassword', label: 'Confirm password'},
  {type: 'tel', field: 'phoneNumber', label: 'Phone number', placeholder: 'Must start with country code (f.e. +380...)'}
];
