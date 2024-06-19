import PropTypes from 'prop-types';
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Typography} from '@mui/material';
import {useWatch, useController, Control} from 'react-hook-form';
import {ReactElement, ReactNode} from 'react';
import clsx from 'clsx';

const defaultConfig = {
  label: 'label',
  value: 'value'
};

type Option = {label: string; value: string};

interface CheckboxGroupProps {
  control: Control<any>;
  name: string;
  options: Option[];
  config?: {label: string; value: string};
}

const CheckboxGroup = ({control, name, options, config = defaultConfig}: CheckboxGroupProps): ReactElement => {
  const {
    field: {ref, value, onChange, ...inputProps},
    formState: {errors}
  } = useController({
    name,
    control,
    defaultValue: []
  });

  const checkboxIds = useWatch({control, name: name}) || [];

  const handleChange = (value: string): void => {
    const newArray = [...checkboxIds];
    const item = value;

    if (newArray.length > 0) {
      const index = newArray.findIndex((x) => x === item);
      if (index === -1) {
        newArray.push(item);
      } else {
        newArray.splice(index, 1);
      }
    } else {
      newArray.push(item);
    }

    onChange(newArray);
  };

  return (
    <>
      <FormControl>
        <FormGroup>
          {options.map((option) => {
            const optionValue = option[config.value as keyof Option];
            const optionLabel = option[config.label as keyof Option];
            const checked = value?.some((checked: string) => checked === optionValue);
            const selectedClasses = checked && 'font-semibold text-secondary';

            return (
              <FormControlLabel
                control={
                  <Checkbox checked={checked} {...inputProps} inputRef={ref} onChange={() => handleChange(optionValue)} className="text-secondary" />
                }
                label={
                  <Typography className={clsx('customH3 m-0 truncate font-normal hover:font-semibold hover:text-secondary', selectedClasses)}>
                    {optionLabel as string}
                  </Typography>
                }
                key={optionValue as string}
              />
            );
          })}
        </FormGroup>
      </FormControl>
      <FormHelperText error variant="outlined">
        {(errors?.[name] as ReactNode) || ' '}
      </FormHelperText>
    </>
  );
};

CheckboxGroup.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default CheckboxGroup;
