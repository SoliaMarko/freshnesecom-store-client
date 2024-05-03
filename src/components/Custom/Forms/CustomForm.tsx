import {ReactElement} from 'react';
import {Box} from '@mui/material';
import StyledTextField from '../Inputs/StyledTextField';
import PrimaryButton from '../Buttons/PrimaryButton';
import {CustomFormProps} from '@/interfaces/props/CustomProps/Forms/customFormProps.interface';

const CustomForm = ({formMethods, onSubmitHandler, fields, submitTitle}: CustomFormProps): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = formMethods;

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col gap-5">
      {fields.map(
        (field, index): ReactElement => (
          <StyledTextField
            key={`${index}-${field}`}
            name={field.field}
            type={field.type}
            register={register}
            errors={errors}
            label={field.label}
            placeholder={field.placeholder ?? ''}
            required
          />
        )
      )}
      <Box className="flex justify-end">
        <PrimaryButton>{submitTitle}</PrimaryButton>
      </Box>
    </form>
  );
};

export default CustomForm;
