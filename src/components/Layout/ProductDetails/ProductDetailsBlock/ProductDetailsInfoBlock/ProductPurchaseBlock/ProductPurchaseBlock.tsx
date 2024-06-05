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
    <Box className="my-4 flex flex-row items-center justify-between rounded-xl border-2 border-solid border-primary-400 px-3 py-2 sm:p-5 md:mr-9">
      <CustomPriceBlock
        productData={productData}
        titleClassNames="font-semibold text-lg sm:text-2xl sm:mb-1"
        contentClassNames="font-semibold text-base sm:text-xl"
      />
      <Box className="flex flex-row gap-4 sm:gap-8">
        <CustomQuantityInput options={quantityOptionsWithIDs} />
        <ProductAddToCartButton />
      </Box>
    </Box>
  );
};

export default ProductPurchaseBlock;
