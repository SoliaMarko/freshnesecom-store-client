import {ReactElement} from 'react';
import StyledTextField from '../Inputs/StyledTextField';
import PrimaryButton from '../Buttons/PrimaryButton';
import {Box} from '@mui/material';
import {FormPropsTypes} from '@/interfaces/form/formPropsTypes.interface';

const CustomForm = ({formMethods, onSubmitHandler, fields, submitTitle}: FormPropsTypes): ReactElement => {
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
