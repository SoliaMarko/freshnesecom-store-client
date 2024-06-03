import {ReactElement} from 'react';
import {TabDataInterface} from '../CustomTabs';
import CustomTabPanel from '../CustomTabPanel/CustomTabPanel';
import AdditionalDescriptionBlock from '@/components/Layout/ProductDetails/ProductDetailsBlock/ProductDetailsInfoBlock/ProductTabs/AdditionalDescriptionBlock/AdditionalDescriptionBlock';
import {AdditionalDescription} from '@/interfaces/products/productEntity.interface';
import {Typography} from '@mui/material';
import {ItemWithIDType} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

interface TabPanelsProps {
  value: number;
  tabs: TabDataInterface[];
}

const TabPanels = ({value, tabs}: TabPanelsProps): ReactElement => {
  return (
    <>
      {tabs.map((tab: TabDataInterface, index: number) => {
        const {id} = tab;

        return (
          <CustomTabPanel key={id} value={value} index={index}>
            {tab.label === 'Description' && <AdditionalDescriptionBlock descriptions={tab.content as ItemWithIDType<AdditionalDescription>[]} />}
            <Typography className="customH4 font-normal">{!tab.content && `There is no ${tab.label}.`}</Typography>
          </CustomTabPanel>
        );
      })}
    </>
  );
};

export default TabPanels;
