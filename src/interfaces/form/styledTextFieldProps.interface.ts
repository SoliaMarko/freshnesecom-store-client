/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StyledTextFieldProps {
  name: string;
  type?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  register: any;
  errors: any;
}
