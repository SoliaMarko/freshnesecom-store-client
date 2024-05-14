import {ReactElement} from 'react';
import {TabDataInterface} from '../CustomTabs';
import CustomTabPanel from '../CustomTabPanel/CustomTabPanel';
import AdditionalDescriptionBlock from '@/components/Layout/ProductDetails/ProductDetailsInfoBlock/ProductTabs/AdditionalDescriptionBlock';
import {AdditionalDescription} from '@/interfaces/products/productEntity.interface';
import {Typography} from '@mui/material';

interface TabPanelsProps {
  value: number;
  tabsData: TabDataInterface[];
}

const TabPanels = ({value, tabsData}: TabPanelsProps): ReactElement => {
  return (
    <>
      {tabsData.map(
        (tab: TabDataInterface, index: number): ReactElement => (
          <CustomTabPanel key={index} value={value} index={index}>
            {tab.label === 'Description' && <AdditionalDescriptionBlock descriptions={tab.content as AdditionalDescription[]} />}
            <Typography className="customH4 font-normal">{!tab.content && `There is no ${tab.label}.`}</Typography>
          </CustomTabPanel>
        )
      )}
    </>
  );
};

export default TabPanels;
