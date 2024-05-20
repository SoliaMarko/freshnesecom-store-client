import {ReactElement, SyntheticEvent, useState} from 'react';
import {Box} from '@mui/material';
import {AdditionalDescription} from '@/interfaces/products/productEntity.interface';
import TabPanels from './TabPanels/TabPanels';
import TabsBlock from './TabsBlocks/TabsBlock';
import {WithID} from '@/utils/productsHelpers/getTransformedArrayWithIDs';

export interface TabDataInterface {
  label: string;
  id: string;
  hasLabelChip: boolean;
  content?: WithID<AdditionalDescription>[];
}

export interface CustomTabProps {
  tabsData: TabDataInterface[];
}

const CustomTabs = ({tabsData}: CustomTabProps): ReactElement => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <Box className="w-full">
      <Box className="border-0 border-solid border-b-primary-600">
        <TabsBlock value={value} onChange={handleChange} tabsData={tabsData} />
      </Box>
      <TabPanels tabs={tabsData} value={value} />
    </Box>
  );
};

export default CustomTabs;
