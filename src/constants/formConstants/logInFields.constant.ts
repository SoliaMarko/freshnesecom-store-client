import {FormFields} from '@/interfaces/form/formFields.interface';
import {v4 as uuid} from 'uuid';

export const logInFields: FormFields[] = [
  {id: uuid(), type: 'email', field: 'email', label: 'Email', placeholder: ''},
  {id: uuid(), type: 'password', field: 'password', label: 'Password', placeholder: ''}
];
