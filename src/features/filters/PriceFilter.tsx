import CustomedSlider from '@/components/Custom/CustomSlider/CustomSlider';
import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';

const PriceFilter = (): ReactElement => {
  return (
    <Box>
      <Typography className="customH2" align="left">
        Price
      </Typography>
      <CustomedSlider />
      {/* <RangeInputs /> */}
    </Box>
  );
};

export default PriceFilter;
