import {ReactElement} from 'react';
import {TabDataInterface} from '../CustomTabs';
import CustomTabPanel from '../CustomTabPanel/CustomTabPanel';
import AdditionalDescriptionBlock from '@/components/Layout/ProductDetails/ProductDetailsInfoBlock/ProductTabs/AdditionalDescriptionBlock/AdditionalDescriptionBlock';
import {AdditionalDescription} from '@/interfaces/products/productEntity.interface';
import {Typography} from '@mui/material';
import {useId} from 'react-id-generator';

interface TabPanelsProps {
  value: number;
  tabsData: TabDataInterface[];
}

const TabPanels = ({value, tabsData}: TabPanelsProps): ReactElement => {
  return (
    <>
      {tabsData.map((tab: TabDataInterface, index: number): ReactElement => {
        const [keyID] = useId();

        return (
          <CustomTabPanel key={keyID} value={value} index={index}>
            {tab.label === 'Description' && <AdditionalDescriptionBlock descriptions={tab.content as AdditionalDescription[]} />}
            <Typography className="customH4 font-normal">{!tab.content && `There is no ${tab.label}.`}</Typography>
          </CustomTabPanel>
        );
      })}
    </>
  );
};

export default TabPanels;
