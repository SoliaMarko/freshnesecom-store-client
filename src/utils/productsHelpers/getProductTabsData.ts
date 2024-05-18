import {TabDataInterface} from '@/components/Custom/CustomTabs/CustomTabs';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {v4 as uuid} from 'uuid';

export const getProductTabsData = (productData: TransformedProductType): TabDataInterface[] => {
  const {additionalDescriptions} = productData;

  return [
    {id: uuid(), label: 'Description', hasLabelChip: false, content: additionalDescriptions},
    {id: uuid(), label: 'Reviews', hasLabelChip: true},
    {id: uuid(), label: 'Questions', hasLabelChip: true}
  ];
};
