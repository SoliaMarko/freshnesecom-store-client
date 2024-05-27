import {ReactElement} from 'react';
import {Box} from '@mui/material';
import {NewParams} from '../ProductsWithFiltersContainer/ProductsWithFiltersContainer';
import ProductFiltersForm from '@/components/Custom/Forms/ProductFiltersForm/ProductFiltersForm';

interface FilterProps {
  handleSearchParamsChange: (params: NewParams) => void;
}

const Filters = ({handleSearchParamsChange}: FilterProps): ReactElement => {
  return (
    <Box className="w-1/4">
      <ProductFiltersForm handleSearchParamsChange={handleSearchParamsChange} />
    </Box>
  );
};

export default Filters;
