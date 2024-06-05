import CustomTabs, {TabDataInterface} from '@/components/Custom/CustomTabs/CustomTabs';

interface ProductTabsProps {
  productTabsData: TabDataInterface[];
}

const ProductTabs = ({productTabsData}: ProductTabsProps) => {
  return <CustomTabs tabsData={productTabsData} />;
};

export default ProductTabs;
