import {ElementType, ReactElement} from 'react';
import {Box, Slider} from '@mui/material';
import CustomThumb from './CustomThumb/CustomThumb';
import clsx from 'clsx';

interface CustomSliderProps {
  range: {min: number; max: number};
  values: {
    min: number;
    max: number;
  };
  handleMin: (value: number) => void;
  handleMax: (value: number) => void;
  classNames?: string;
  thumb?: ElementType<any>;
  displayLabel?: boolean;
}

const CustomSlider = ({range, values, handleMin, handleMax, classNames, thumb, displayLabel}: CustomSliderProps): ReactElement => {
  const {min, max} = range;
  const {min: minSelected, max: maxSelected} = values;

  const handleChange = (_event: Event, value: number | number[]): void => {
    if (Array.isArray(value)) {
      handleMin(value[0]);
      handleMax(value[1]);
    }
  };

  return (
    <Box>
      <Box className="my-3" />
      <Slider
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        min={min}
        max={max}
        value={[+minSelected, +maxSelected]}
        valueLabelDisplay={displayLabel ? 'on' : 'auto'}
        className={clsx('h-2', classNames)}
        onChange={handleChange}
        slots={{
          thumb: thumb || CustomThumb
        }}
      />
    </Box>
  );
};

export default CustomSlider;
