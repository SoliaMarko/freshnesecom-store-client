import {AuthState} from './authState.interface';

export interface LogInData extends AuthState {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
}
