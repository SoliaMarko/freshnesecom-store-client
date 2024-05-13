import {ReactElement, useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import BreadcrumbsBlock from '@/components/Layout/Home/BreadcrumbsBlock/BreadcrumbsBlock';
import {useGetProductsQuery} from '@/store/services/productsApi';
import {setProducts} from '@/store/slices/products.slice';
import {useAppDispatch} from '@/hooks/apiHooks';
import {generalAppInfo} from '@/constants/globalConstants/global.constant';
import SortBlock from '@/components/Layout/Home/SortBlock/SortBlock';
import ProductsWithFiltersContainer from '@/components/Layout/Home/ProductsWithFiltersContainer/ProductsWithFiltersContainer';

const Home = (): ReactElement => {
  // in list

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
