import {ReactElement} from 'react';
import {Box} from '@mui/material';
import ProductHeader from './ProductHeader/ProductHeader';
import ProductMainDescription from './ProductMainDescription/ProductMainDescription';
import ProductAdditionalDetails from './ProductAdditionalDetails/ProductAdditionalDetails';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import ProductPurchaseBlock from './ProductPurchaseBlock/ProductPurchaseBlock';
import AddToWishListButton from '@/components/Custom/Buttons/ProductCardButtons/AddToWishListButton';
import ProductTabs from './ProductTabs/ProductTabs';

interface ProductDetailsInfoBlockProps {
  productData: TransformedProductType;
}

const ProductDetailsInfoBlock = ({productData}: ProductDetailsInfoBlockProps): ReactElement => {
  return (
    <Box className="flex flex-1 flex-col gap-14">
      <Box className="flex flex-col gap-10">
        <ProductHeader productData={productData} />
        <ProductMainDescription productData={productData} />
        <ProductAdditionalDetails productData={productData} />
        <ProductPurchaseBlock productData={productData} />
        <Box className="max-w-44">
          <AddToWishListButton />
        </Box>
      </Box>

      <Box>
        <ProductTabs productData={productData} />
      </Box>
    </Box>
  );
};

export default ProductDetailsInfoBlock;
