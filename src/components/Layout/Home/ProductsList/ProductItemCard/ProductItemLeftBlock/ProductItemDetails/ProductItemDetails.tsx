import {ReactElement} from 'react';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import DetailsBlock from '@/components/Custom/DetailsBlock/DetailsBlock';
import {Box} from '@mui/material';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import clsx from 'clsx';

interface ProductItemDetailsProps {
  productData: TransformedProductType;
  classNames?: string;
}

const ProductItemDetails = ({productData, classNames}: ProductItemDetailsProps): ReactElement => {
  const {freshness, producer, deliveryFrom: delivery, inStockCount: stock} = productData;
  const producerCategory = producer?.category ? {[producer.category]: producer?.name || ''} : {};
  const productAdditional = {freshness, ...producerCategory, delivery, stock};
  const additionalProductProps = getTransformedArrayWithIDs(Object.keys(productAdditional));

  return (
    <Box className={clsx('mt-6 flex flex-col gap-2', classNames)}>
      <DetailsBlock keys={additionalProductProps} details={productAdditional} />
    </Box>
  );
};

export default ProductItemDetails;
