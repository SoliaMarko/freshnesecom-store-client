import {ReactElement} from 'react';
import {Box} from '@mui/material';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import CustomPriceBlock from '@/components/Custom/CustomPriceBlock/CustomPriceBlock';
import {quantityUnitOptions} from '@/constants/productsConstants/quantityUnits.constant';
import CustomQuantityInput from '@/components/Custom/Inputs/CustomQuantityInput/CustomQuantityInput';
import ProductAddToCartButton from '@/components/Custom/Buttons/ProductCardButtons/ProductAddToCartButton';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

interface ProductPurchaseBlockProps {
  productData: TransformedProductType;
}

const ProductPurchaseBlock = ({productData}: ProductPurchaseBlockProps): ReactElement => {
  const quantityOptionsWithIDs = getTransformedArrayWithIDs(quantityUnitOptions.map((option): string => option.label));

  return (
    <Box className="mr-9 flex flex-row justify-between rounded-xl border-2 border-solid border-primary-400 p-5">
      <CustomPriceBlock productData={productData} size="medium" />
      <Box className="flex flex-row gap-8">
        <CustomQuantityInput options={quantityOptionsWithIDs} />
        <ProductAddToCartButton />
      </Box>
    </Box>
  );
};

export default ProductPurchaseBlock;
