import {TextField} from '@mui/material';
import {ChangeEvent, ReactElement} from 'react';

interface CustomNumberFieldProps {
  label?: string;
  placeholder?: number | string;
  value: number;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomNumberField = ({label, placeholder, value, onChangeHandler}: CustomNumberFieldProps): ReactElement => {
  return (
    <TextField
      label={label || 'Number'}
      placeholder={placeholder?.toString() || ''}
      value={value}
      onChange={onChangeHandler}
      type="number"
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};

export default CustomNumberField;
