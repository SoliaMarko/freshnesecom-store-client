import {ReactElement} from 'react';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import DetailsBlock from '@/components/Custom/DetailsBlock/DetailsBlock';
import {Box} from '@mui/material';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

interface ProductItemDetailsProps {
  productData: TransformedProductType;
}

const ProductItemDetails = ({productData}: ProductItemDetailsProps): ReactElement => {
  const {freshness, producer, deliveryFrom: delivery, inStockCount: stock} = productData;
  const producerCategory = producer?.category ? {[producer.category]: producer?.name || ''} : {};
  const productAdditional = {freshness, ...producerCategory, delivery, stock};
  const additionalProductProps = getTransformedArrayWithIDs(Object.keys(productAdditional));

  return (
    <Box className="mt-6 flex flex-col gap-2">
      <DetailsBlock keys={additionalProductProps} details={productAdditional} />
    </Box>
  );
};

export default ProductItemDetails;
