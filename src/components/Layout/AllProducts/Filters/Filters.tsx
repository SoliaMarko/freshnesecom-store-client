import {ReactElement} from 'react';
import {Box} from '@mui/material';
import {NewParams} from '../ProductsWithSortAndFiltersContainer/ProductsWithSortAndFiltersContainer';
import ProductFiltersForm from '@/components/Custom/Forms/ProductFiltersForm/ProductFiltersForm';
import clsx from 'clsx';

interface FilterProps {
  handleSearchParamsChange: (params: NewParams) => void;
  classNames?: string;
}

const Filters = ({handleSearchParamsChange, classNames}: FilterProps): ReactElement => {
  return (
    <Box className={clsx('top-6 h-full max-h-lvh overflow-y-auto xl:block', classNames)}>
      <ProductFiltersForm handleSearchParamsChange={handleSearchParamsChange} />
    </Box>
  );
};

export default Filters;
