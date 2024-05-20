import {ReactElement} from 'react';
import {Box} from '@mui/material';
import ProductItemMainInfo from './ProductItemLeftBlock/ProductItemMainInfo';
import ProductItemPriceInfo from './ProductItemRightBlock/ProductItemPriceInfo';
import ProductItemDeliveryDetails from './ProductItemRightBlock/ProductItemDeliveryDetails';
import ProductItemButtons from './ProductItemRightBlock/ProductItemButtons';
import ProductItemAdditionalInfoList from './ProductItemLeftBlock/ProductItemDetails/ProductItemDetails';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';

interface ProductItemCardProps {
  productData: TransformedProductType;
}

const ProductItemCard = ({productData}: ProductItemCardProps): ReactElement => {
  const {title, images} = productData;
  const mainImage = images[0].value;

  return (
    <Box className="relative flex w-full max-w-7xl flex-row rounded-xl border-2 border-solid border-primary-400 ">
      <Box className="relative flex w-1/3">
        <img src={mainImage} alt={`${title}-illustration`} loading="lazy" className="absolute left-0 top-0 h-full w-full rounded-xl object-cover" />
      </Box>
      <Box className="gap-1/6 flex w-2/3 flex-row items-center justify-between p-8">
        <Box className="flex w-1/2 flex-col">
          <ProductItemMainInfo productData={productData} />
          <ProductItemAdditionalInfoList productData={productData} />
        </Box>
        <Box className="flex h-full w-1/3 flex-col justify-between">
          <ProductItemPriceInfo productData={productData} />
          <ProductItemDeliveryDetails productData={productData} />
          <ProductItemButtons productData={productData} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItemCard;
