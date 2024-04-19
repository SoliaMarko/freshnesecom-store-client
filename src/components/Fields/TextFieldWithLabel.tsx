import {Box, FormLabel, TextField} from '@mui/material';
import {TextFieldWithLabelProps} from '@/interfaces/form/textFieldWithLabelProps.interface';
import {getCamelCase} from '@/utils/stringFormatters';

const TextFieldWithLabel = ({children, type = 'text', required = false, register, errors}: TextFieldWithLabelProps): JSX.Element => {
  const name = getCamelCase(children);

  return (
    <Box className="flex flex-col">
      <FormLabel
        id={`${name}Label`}
        htmlFor={name}
        className={`text-left font-semibold leading-5 text-primary ${required ? "after:content-['*']" : ''}`}
      >
        {children}
      </FormLabel>
      <TextField
        type={type}
        id={name}
        placeholder={children}
        required={required}
        className="rounded-xl bg-primary-700"
        variant="outlined"
        {...register(name)}
      />
      {errors?.[name] && <p className="text-tangerineShade-200">{errors[name].message}</p>}
    </Box>
  );
};

export default TextFieldWithLabel;
