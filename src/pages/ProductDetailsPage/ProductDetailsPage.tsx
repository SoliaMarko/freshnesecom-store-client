import {ReactElement} from 'react';
import {Box} from '@mui/material';
import ProductDetailsBlock from '@/components/Layout/ProductDetails/ProductDetailsBlock';
import BreadcrumbsBlock from '@/components/Layout/Home/BreadcrumbsBlock/BreadcrumbsBlock';

const ProductDetailsPage = (): ReactElement => {
  return (
    <Box className="flex flex-col">
      <BreadcrumbsBlock />
      <ProductDetailsBlock />
      {/* <RelatedProductsCarrousel /> */}
    </Box>
  );
};

export default ProductDetailsPage;
