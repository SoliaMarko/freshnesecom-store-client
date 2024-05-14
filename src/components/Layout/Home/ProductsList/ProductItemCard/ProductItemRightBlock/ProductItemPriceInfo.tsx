import {ReactElement} from 'react';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import CustomPriceBlock from '@/components/Custom/CustomPriceBlock/CustomPriceBlock';

interface ProductItemPriceInfoProps {
  productData: TransformedProductType;
}

const ProductItemPriceInfo = ({productData}: ProductItemPriceInfoProps): ReactElement => {
  return (
    <>
      <CustomPriceBlock productData={productData} />
    </>
  );
};

export default ProductItemPriceInfo;
