import {ReactElement} from 'react';
import {Box, Slider} from '@mui/material';
import CustomThumb from './CustomThumb/CustomThumb';

const CustomeSlider = (): ReactElement => {
  return (
    <Box className="max-w-80">
      <Box className="my-3" />
      <Slider
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        // maxValue / stepsCount
        step={10000 / 10}
        min={0}
        max={10000}
        defaultValue={[0, 10000]}
        valueLabelDisplay="auto"
        className="h-2 text-secondary"
        slots={{
          thumb: CustomThumb
        }}
      />
    </Box>
  );
};

export default CustomeSlider;
