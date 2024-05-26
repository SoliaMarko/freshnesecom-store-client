import {ReactElement} from 'react';
import {Box, Slider} from '@mui/material';
import CustomThumb from './CustomThumb/CustomThumb';
import {RangeConstraints} from '@/features/filters/PriceFilter';

interface CustomSliderProps {
  range: RangeConstraints;
  values: RangeConstraints;
  handleMinMax: (minValue: number, maxValue: number) => void;
}

const CustomSlider = ({range, values, handleMinMax}: CustomSliderProps): ReactElement => {
  const {min, max} = range;
  const {minPrice: minSelected, maxPrice: maxSelected} = values;

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
        className="h-2 text-secondary"
        onChange={handleChange}
        slots={{
          thumb: CustomThumb
        }}
      />
    </Box>
  );
};

export default CustomSlider;
