import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import BreadcrumbsBlock from '@/components/Layout/Home/BreadcrumbsBlock/BreadcrumbsBlock';
import ProductsWithSortAndFiltersContainer from '@/components/Layout/Home/ProductsWithSortAndFiltersContainer/ProductsWithSortAndFiltersContainer';

const Home = (): ReactElement => {
  return (
    <Box>
      <BreadcrumbsBlock />
      <Typography className="customH1" align="left">
        All Products
      </Typography>
      <Box>
        <ProductsWithSortAndFiltersContainer />
      </Box>
    </Box>
  );
};

export default Home;
