import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import BreadcrumbsBlock from '@/components/Layout/Home/BreadcrumbsBlock/BreadcrumbsBlock';
import SortBlock from '@/components/Layout/Home/SortBlock/SortBlock';
import ProductsWithFiltersContainer from '@/components/Layout/Home/ProductsWithFiltersContainer/ProductsWithFiltersContainer';

const Home = (): ReactElement => {
  return (
    <Box>
      <BreadcrumbsBlock />
      <Typography className="customH1" align="left">
        All Products
      </Typography>
      <SortBlock />
      <ProductsWithFiltersContainer />
    </Box>
  );
};

export default Home;
