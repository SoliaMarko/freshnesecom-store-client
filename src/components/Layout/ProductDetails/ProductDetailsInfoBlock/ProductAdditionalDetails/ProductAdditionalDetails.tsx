import {ReactElement} from 'react';
import {Box} from '@mui/material';
import DetailsBlock from '@/components/Custom/DetailsBlock/DetailsBlock';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

interface ProductAdditionalDetailsProps {
  productData: TransformedProductType;
}

const ProductAdditionalDetails = ({productData}: ProductAdditionalDetailsProps): ReactElement => {
  const {countryCode, category, inStockCount, colors, sizes, quantityUnits, deliveryArea} = productData;
  const productAdditional = {country: countryCode, category, stock: inStockCount, colors, sizes, buyBy: quantityUnits, deliveryArea};
  const additionalProductProps = Object.keys(productAdditional);
  const indexToSplit = additionalProductProps.length / 2;
  const leftAdditionalProductProps = getTransformedArrayWithIDs(additionalProductProps.slice(0, indexToSplit));
  const rightAdditionalProductProps = getTransformedArrayWithIDs(additionalProductProps.slice(indexToSplit + 1));

  return (
    <Box className="flex flex-row justify-between">
      <Box className="flex flex-1 flex-col gap-2">
        <DetailsBlock keys={leftAdditionalProductProps} details={productAdditional} />
      </Box>
      <Box className="flex flex-1 flex-col gap-2">
        <DetailsBlock keys={rightAdditionalProductProps} details={productAdditional} />
      </Box>
    </Box>
  );
};

export default ProductAdditionalDetails;
