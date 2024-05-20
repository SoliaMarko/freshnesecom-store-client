import {ReactElement} from 'react';
import {Box} from '@mui/material';
import PriceFilter from '@/features/filters/PriceFilter/PriceFilter';
import {NewParams} from '../ProductsWithFiltersContainer/ProductsWithFiltersContainer';
import RatingFilter from '@/features/filters/RatingFilter/RatingFilter';

export interface RangeConstraints {
  min: number;
  max: number;
}

interface FilterProps {
  handleSearchParamsChange: (params: NewParams) => void;
}

const Filters = ({handleSearchParamsChange}: FilterProps): ReactElement => {
  return (
    <Box className="flex w-1/4 flex-col gap-12">
      <RatingFilter handleSearchParamsChange={handleSearchParamsChange} />
      <PriceFilter handleSearchParamsChange={handleSearchParamsChange} />
    </Box>
  );
};

export default Filters;
