import {REQUEST_METHODS_TYPE} from '@/constants/apiConstnants/requestMehods.constant';

export interface MutationReturnType {
  url: string;
  method: string;
  data: string;
  headers: {
    'Content-type': string;
  };
}

export interface QueryReturnType {
  url: string;
  method: REQUEST_METHODS_TYPE;
}

export interface LogoutUserArgs {
  email: string;
}
