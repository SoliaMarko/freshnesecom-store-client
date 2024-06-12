import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import ProductsWithSortAndFiltersContainer from '@/components/Layout/AllProducts/ProductsWithSortAndFiltersContainer/ProductsWithSortAndFiltersContainer';

const AllProducts = (): ReactElement => {
  return (
    <Box>
      <Typography className="customH1 py-2 text-left">All Products</Typography>
      <Box>
        <ProductsWithSortAndFiltersContainer />
      </Box>
    </Box>
  );
};

export default AllProducts;
