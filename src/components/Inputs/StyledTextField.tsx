import {ReactElement} from 'react';
import {Box, InputLabel, TextField} from '@mui/material';
import {StyledTextFieldProps} from '@/interfaces/form/styledTextFieldProps.interface';

const StyledTextField = ({name, type = 'text', label = '', required, placeholder, register, errors}: StyledTextFieldProps): ReactElement => {
  return (
    <Box className="flex flex-col">
      <InputLabel id={`${name}Label`} htmlFor={name} className={`text-left font-semibold leading-5 text-primary `} required={required}>
        {label}
      </InputLabel>
      <TextField
        type={type}
        id={name}
        placeholder={placeholder ? placeholder : ''}
        required={required}
        className="rounded-xl bg-primary-700"
        variant="outlined"
        {...register(name)}
      />
      {errors?.[name] && <p className="text-red-600">{errors[name].message}</p>}
    </Box>
  );
};

export default StyledTextField;
