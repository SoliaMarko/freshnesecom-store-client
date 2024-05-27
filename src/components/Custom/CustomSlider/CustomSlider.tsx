import {ReactElement} from 'react';
import {Box, Slider} from '@mui/material';
import CustomThumb from './CustomThumb/CustomThumb';
import {RangeConstraints} from '@/features/filters/PriceFilter';
import clsx from 'clsx';

interface CustomSliderProps {
  range: RangeConstraints;
  values: RangeConstraints;
  handleMinMax: (minValue: number, maxValue: number) => void;
  classNames?: string;
}

const CustomSlider = ({range, values, handleMinMax, classNames}: CustomSliderProps): ReactElement => {
  const {min, max} = range;
  const {min: minSelected, max: maxSelected} = values;

  const handleChange = (_event: Event, value: number | number[]): void => {
    if (Array.isArray(value)) {
      handleMinMax(value[0], value[1]);
    }
  };

  return (
    <Box>
      <Box className="my-3" />
      <Slider
        min={min}
        max={max}
        value={[+minSelected, +maxSelected]}
        valueLabelDisplay="auto"
        className={clsx('h-2 text-secondary', classNames)}
        onChange={handleChange}
        slots={{
          thumb: CustomThumb
        }}
      />
    </Box>
  );
};

export default CustomSlider;
