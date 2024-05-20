import {ReactElement} from 'react';
import {Box, Slider} from '@mui/material';
import CustomThumb from './CustomThumb/CustomThumb';

interface CustomSliderProps {
  range: {min: number; max: number};
  values: {minPrice: number; maxPrice: number};
  handleMin: (value: number) => void;
  handleMax: (value: number) => void;
}

const CustomSlider = ({range, values, handleMin, handleMax}: CustomSliderProps): ReactElement => {
  const {min, max} = range;
  const {minPrice: minSelected, maxPrice: maxSelected} = values;

  const handleChange = (_event: Event, value: number | number[]): void => {
    console.log(value);

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
