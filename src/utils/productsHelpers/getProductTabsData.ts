import {TabDataInterface} from '@/components/Custom/CustomTabs/CustomTabs';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {v4 as uuid} from 'uuid';

export const getProductTabsData = (productData: TransformedProductType): TabDataInterface[] => {
  const {additionalDescriptions} = productData;

  return [
    {id: uuid(), header: 'Description', hasHeaderChip: false, content: additionalDescriptions},
    {id: uuid(), header: 'Reviews', hasHeaderChip: true},
    {id: uuid(), header: 'Questions', hasHeaderChip: true}
  ];
};
