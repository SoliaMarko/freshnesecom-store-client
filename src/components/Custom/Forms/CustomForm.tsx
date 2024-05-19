import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import StyledTextField from '../Inputs/StyledTextField';
import PrimaryButton from '../Buttons/PrimaryButton';
import {FieldValues, UseFormReturn} from 'react-hook-form';
import {FormFields} from '@/interfaces/form/formFields.interface';

interface CustomFormProps<FieldsModel extends FieldValues> {
  formMethods: UseFormReturn<FieldsModel>;
  onSubmitHandler: (data: FieldsModel) => Promise<void>;
  fields: FormFields[];
  submitTitle: string;
}

const CustomForm = <FieldsModel extends FieldValues>({
  formMethods,
  onSubmitHandler,
  fields,
  submitTitle
}: CustomFormProps<FieldsModel>): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = formMethods;

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col gap-5">
      {fields.map((field) => {
        const {id, type, label, placeholder} = field;

        return (
          <StyledTextField<FieldsModel>
            key={id}
            name={field.field}
            type={type}
            register={register}
            errors={errors}
            label={label}
            placeholder={placeholder ?? ''}
            required
          />
        );
      })}
      <Box className="flex justify-end">
        <PrimaryButton>
          <Typography className="text-lg font-semibold">{submitTitle}</Typography>
        </PrimaryButton>
      </Box>
    </form>
  );
};

export default CustomForm;
