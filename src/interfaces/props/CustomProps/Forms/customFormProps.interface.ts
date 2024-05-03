import {UseFormReturn} from 'react-hook-form';
import {FormFields} from '../../../form/formFields.interface';

export interface CustomFormProps {
  formMethods: UseFormReturn<any>;
  onSubmitHandler: (data: any) => Promise<any>;
  fields: FormFields[];
  submitTitle: string;
}
