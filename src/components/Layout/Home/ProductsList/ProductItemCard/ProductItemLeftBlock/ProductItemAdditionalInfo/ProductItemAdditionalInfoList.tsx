import {ReactElement} from 'react';
import {Box} from '@mui/material';
import ProductItemAdditionalInfoItem from './ProductItemAdditionalInfoItem';
import {CardProductType} from '@/interfaces/products/cardProductType.interface';

interface ProductItemAdditionalInfoListProps {
  productData: CardProductType;
}

const ProductItemAdditionalInfoList = ({productData}: ProductItemAdditionalInfoListProps): ReactElement => {
  const {freshness, producer, delivery, stock} = productData;
  const productAdditional = {freshness, [producer?.category || '']: producer?.name || '', delivery, stock};
  const additionalProductProps = Object.keys(productAdditional);

  return (
    <Box className="mt-6 flex flex-col gap-2">
      {additionalProductProps.map((prop: string, index: number) => (
        <ProductItemAdditionalInfoItem key={`${index}-${prop}`} title={prop} content={productAdditional[prop]?.toString() || ''} />
      ))}
    </Box>
  );
};

export default ProductItemAdditionalInfoList;
