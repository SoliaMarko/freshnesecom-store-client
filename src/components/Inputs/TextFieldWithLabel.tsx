import {getCamelCase} from '@/utils/stringFormatters';
import {Box, FormLabel, TextField} from '@mui/material';

const TextFieldWithLabel = ({children, type = 'text', required = false}: {children: string; type?: string; required?: boolean}): JSX.Element => {
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
        name={name}
        placeholder={children}
        required={required}
        className="rounded-xl bg-primary-700"
        variant="outlined"
      />
    </Box>
  );
};

export default TextFieldWithLabel;
