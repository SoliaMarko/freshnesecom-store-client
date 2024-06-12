import {ReactElement} from 'react';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import CustomPriceBlock from '@/components/Custom/CustomPriceBlock/CustomPriceBlock';

interface ProductItemPriceInfoProps {
  productData: TransformedProductType;
}

const ProductItemPriceInfo = ({productData}: ProductItemPriceInfoProps): ReactElement => {
  return (
    <CustomPriceBlock
      productData={productData}
      titleClassNames="font-semibold text-lg sm:text-2xl sm:mb-1"
      contentClassNames="font-semibold text-base sm:text-xl"
    />
  );
};

export default ProductItemPriceInfo;
