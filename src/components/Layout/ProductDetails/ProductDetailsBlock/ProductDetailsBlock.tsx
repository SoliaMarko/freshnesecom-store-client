import {ReactElement} from 'react';
import {Box} from '@mui/material';
import ProductDetailsGalleryBlock from './ProductDetailsGalleryBlock/ProductDetailsGalleryBlock';
import ProductDetailsInfoBlock from './ProductDetailsInfoBlock/ProductDetailsInfoBlock';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';

interface ProductDetailsBlockProps {
  productData: TransformedProductType;
}

const ProductDetailsBlock = ({productData}: ProductDetailsBlockProps): ReactElement => {
  return (
    <Box className="flex flex-row justify-center">
      <Box className="flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:gap-12">
        <ProductDetailsGalleryBlock productData={productData} />
        <ProductDetailsInfoBlock productData={productData} />
      </Box>
    </Box>
  );
};

export default ProductDetailsBlock;
