import {ReactElement} from 'react';
import {Box} from '@mui/material';
import ProductItemAdditionalInfoItem from './ProductItemAdditionalInfoItem';
import {CardProductType} from '@/interfaces/products/cardProductType.interface';

interface ProductItemAdditionalInfoListProps {
  productData: CardProductType;
}

type ProductAdditionalData = 'freshness' | 'delivery' | undefined | 'stock';

const ProductItemAdditionalInfoList = ({productData}: ProductItemAdditionalInfoListProps): ReactElement => {
  const {freshness, producer, delivery, stock} = productData;
  const category = producer?.category ? {[producer.category]: producer?.name || ''} : {};
  const productAdditional = {freshness, ...category, delivery, stock};
  const additionalProductProps = Object.keys(productAdditional) as ProductAdditionalData[];

  return (
    <Box className="mt-6 flex flex-col gap-2">
      {additionalProductProps.map(
        (prop: ProductAdditionalData, index: number): ReactElement => (
          <ProductItemAdditionalInfoItem key={`${index}-${prop}`} title={prop?.toString()} content={prop && productAdditional[prop]?.toString()} />
        )
      )}
    </Box>
  );
};

export default ProductItemAdditionalInfoList;
