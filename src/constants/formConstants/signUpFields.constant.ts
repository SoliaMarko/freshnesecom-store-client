import {FormFields} from '@/interfaces/form/formFields.interface';
import {v4 as uuid} from 'uuid';

export const signUpFields: FormFields[] = [
  {id: uuid(), type: 'string', field: 'firstName', label: 'First name'},
  {id: uuid(), type: 'string', field: 'lastName', label: 'Last name'},
  {id: uuid(), type: 'email', field: 'email', label: 'Email'},
  {id: uuid(), type: 'password', field: 'password', label: 'Password', placeholder: 'At least 8 characters'},
  {id: uuid(), type: 'password', field: 'confirmPassword', label: 'Confirm password'},
  {id: uuid(), type: 'tel', field: 'phoneNumber', label: 'Phone number', placeholder: 'Must start with country code (f.e. +380...)'}
];
