import {ReactElement} from 'react';
import {Box} from '@mui/material';
import {NewParams} from '../ProductsWithSortAndFiltersContainer/ProductsWithSortAndFiltersContainer';
import ProductFiltersForm from '@/components/Custom/Forms/ProductFiltersForm/ProductFiltersForm';

interface FilterProps {
  handleSearchParamsChange: (params: NewParams) => void;
}

const Filters = ({handleSearchParamsChange}: FilterProps): ReactElement => {
  return (
    <Box className="sticky top-6 hidden h-full max-h-lvh w-1/4 overflow-y-auto xl:block">
      <ProductFiltersForm handleSearchParamsChange={handleSearchParamsChange} />
    </Box>
  );
};

export default Filters;
