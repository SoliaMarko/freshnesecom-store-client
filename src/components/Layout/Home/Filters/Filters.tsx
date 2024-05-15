import {ReactElement} from 'react';
import {Box} from '@mui/material';
import PriceFilter from '@/features/filters/PriceFilter';

const Filters = (): ReactElement => {
  return (
    <Box className="w-1/4">
      <PriceFilter />
    </Box>
  );
};

export default Filters;
