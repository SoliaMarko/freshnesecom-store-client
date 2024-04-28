import {UseFormReturn} from 'react-hook-form';
import {FormFields} from './formFields.interface';

export interface FormPropsTypes {
  // FormType
  formMethods: UseFormReturn<any>;
  onSubmitHandler: (data: any) => Promise<any>;
  fields: FormFields[];
  submitTitle: string;
}
