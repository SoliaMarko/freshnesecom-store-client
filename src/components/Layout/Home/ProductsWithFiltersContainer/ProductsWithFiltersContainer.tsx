import {ReactElement} from 'react';
import {Box} from '@mui/material';
import Filters from '../Filters/Filters';
import ProductsList from '../ProductsList/ProductsList';

const ProductsWithFiltersContainer = (): ReactElement => {
  return (
    <Box className="flex flex-row justify-between gap-10 px-11 py-16">
      <Filters />
      <ProductsList />
    </Box>
  );
};

export default ProductsWithFiltersContainer;
