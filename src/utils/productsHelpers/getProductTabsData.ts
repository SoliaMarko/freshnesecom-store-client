import {TabDataInterface} from '@/components/Custom/CustomTabs/CustomTabs';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';

export const getProductTabsData = (productData: TransformedProductType): TabDataInterface[] => {
  return [
    {label: 'Description', hasLabelChip: false, content: productData.additionalDescriptions},
    {label: 'Reviews', hasLabelChip: true},
    {label: 'Questions', hasLabelChip: true}
  ];
};
