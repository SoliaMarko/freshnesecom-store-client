import {ReactElement} from 'react';
import {Box} from '@mui/material';
import PriceFilter from '@/features/filters/PriceFilter';
import {NewParams} from '../ProductsWithFiltersContainer/ProductsWithFiltersContainer';

interface FilterProps {
  handleSearchParamsChange: (params: NewParams) => void;
}

const Filters = ({handleSearchParamsChange}: FilterProps): ReactElement => {
  return (
    <Box className="w-1/4">
      <PriceFilter handleSearchParamsChange={handleSearchParamsChange} />
    </Box>
  );
};

export default Filters;
