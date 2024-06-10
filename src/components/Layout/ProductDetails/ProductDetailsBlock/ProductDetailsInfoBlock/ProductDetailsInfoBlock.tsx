import {ReactElement} from 'react';
import {Box} from '@mui/material';
import ProductHeader from './ProductHeader/ProductHeader';
import ProductMainDescription from './ProductMainDescription/ProductMainDescription';
import ProductAdditionalDetails from './ProductAdditionalDetails/ProductAdditionalDetails';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import ProductPurchaseBlock from './ProductPurchaseBlock/ProductPurchaseBlock';
import AddToWishListButton from '@/components/Custom/Buttons/ProductCardButtons/AddToWishListButton';
import ProductTabs from './ProductTabs/ProductTabs';
import {getProductTabsData} from '@/utils/productsHelpers/getProductTabsData';
import {useToggleFavorite} from '@/hooks/useToggleFavorite';

interface ProductDetailsInfoBlockProps {
  productData: TransformedProductType;
}

const ProductDetailsInfoBlock = ({productData}: ProductDetailsInfoBlockProps): ReactElement => {
  const {id} = productData;
  const productTabsData = getProductTabsData(productData);
  const {isFavorite, handleIsFavorite} = useToggleFavorite({productID: id});

  return (
    <Box className="flex flex-1 flex-col gap-8">
      <Box className="flex flex-1 flex-col gap-2 sm:gap-4 md:gap-6">
        <ProductHeader productData={productData} />
        <ProductMainDescription productData={productData} />
        <ProductAdditionalDetails productData={productData} />
        <ProductPurchaseBlock productData={productData} />
        <AddToWishListButton isFavorite={isFavorite} handleClickFavorite={handleIsFavorite} classNames="max-w-44" />
      </Box>
      <ProductTabs productTabsData={productTabsData} />
    </Box>
  );
};

export default ProductDetailsInfoBlock;
