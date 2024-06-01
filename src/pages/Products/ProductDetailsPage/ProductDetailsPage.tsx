import {ReactElement} from 'react';
import {Box} from '@mui/material';
import ProductDetailsBlock from '@/components/Layout/ProductDetails/ProductDetailsBlock';

const ProductDetailsPage = (): ReactElement => {
  return (
    <Box className="flex flex-col">
      <ProductDetailsBlock />
      {/* <RelatedProductsCarrousel /> */}
    </Box>
  );
};

export default ProductDetailsPage;
