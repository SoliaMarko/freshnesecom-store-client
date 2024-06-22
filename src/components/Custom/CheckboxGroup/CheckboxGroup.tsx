import PropTypes from 'prop-types';
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Typography} from '@mui/material';
import {useWatch, useController, Control} from 'react-hook-form';
import {ReactElement, ReactNode} from 'react';
import clsx from 'clsx';

export type Option = {label: string; value: number};

export type OptionConfig = {label: string; value: string};

interface CheckboxGroupProps {
  control: Control<any>;
  name: string;
  options: Option[];
  config?: OptionConfig;
}

const defaultConfig = {
  label: 'label',
  value: 'value'
};

const getTransformedCheckedItemsArray = (array: string[], item: string): string[] => {
  const transformedArray = [...array];

  if (transformedArray.length > 0) {
    const index = transformedArray.findIndex((value: string) => value === item);
    if (index === -1) {
      transformedArray.push(item);
    } else {
      transformedArray.splice(index, 1);
    }
  } else {
    transformedArray.push(item);
  }

  return transformedArray;
};

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

  const handleChange = (item: string): void => {
    const newArray = getTransformedCheckedItemsArray([...checkboxIds], item);

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
                  <Checkbox
                    checked={checked}
                    {...inputProps}
                    inputRef={ref}
                    onChange={() => handleChange(optionValue as string)}
                    className="text-secondary"
                  />
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
        {(errors?.[name] as ReactNode) || ''}
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
