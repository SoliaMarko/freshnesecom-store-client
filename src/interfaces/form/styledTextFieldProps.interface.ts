/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StyledTextFieldProps {
  children: string;
  type?: string;
  labeled?: boolean;
  required?: boolean;
  placeholder?: string;
  register: any;
  errors: any;
}
