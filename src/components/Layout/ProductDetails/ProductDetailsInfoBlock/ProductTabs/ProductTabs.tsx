import CustomTabs from '@/components/Custom/CustomTabs/CustomTabs';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {getProductTabsData} from '@/utils/productsHelpers/getProductTabsData';

interface ProductTabsProps {
  productData: TransformedProductType;
}

const ProductTabs = ({productData}: ProductTabsProps) => {
  const productTabsData = getProductTabsData(productData);

  return <CustomTabs tabsData={productTabsData} />;
};

export default ProductTabs;
