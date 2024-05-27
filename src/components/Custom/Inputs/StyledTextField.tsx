import {ReactElement} from 'react';
import {Box, InputLabel, TextField, Typography} from '@mui/material';
import {Path, UseFormRegister} from 'react-hook-form';

interface StyledTextFieldProps<FieldsModel extends object> {
  name: Path<FieldsModel> | string;
  type?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegister<FieldsModel>;
  errors: any;
}

const StyledTextField = <FieldsModel extends object>({
  name,
  type = 'text',
  label = '',
  required,
  placeholder,
  register,
  errors
}: StyledTextFieldProps<FieldsModel>): ReactElement => {
  return (
    <Box className="flex flex-col gap-2">
      <InputLabel id={`${name}Label`} htmlFor={name} className={'text-left font-semibold leading-5 text-primary'} required={required}>
        {label}
      </InputLabel>
      <TextField
        type={type}
        id={name}
        placeholder={placeholder || ''}
        required={required}
        className="rounded-xl bg-primary-700 p-0"
        variant="outlined"
        {...register(name as Path<FieldsModel>)}
      />
      {errors?.[name]?.message && <Typography className="text-left text-sm text-red-600">{errors[name]?.message}</Typography>}
    </Box>
  );
};

export default StyledTextField;
