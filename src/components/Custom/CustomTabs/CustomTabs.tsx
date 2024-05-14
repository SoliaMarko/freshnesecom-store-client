import {ReactElement, SyntheticEvent, useState} from 'react';
import {Box} from '@mui/material';
import {AdditionalDescription} from '@/interfaces/products/productEntity.interface';
import TabPanels from './TabPanels/TabPanels';
import TabsBlock from './TabsBlocks/TabsBlock';

export interface TabDataInterface {
  label: string;
  hasLabelChip: boolean;
  content: string | AdditionalDescription[] | undefined;
}

export interface CustomTabProps {
  tabsData: TabDataInterface[];
}

const CustomTabs = ({tabsData}: CustomTabProps): ReactElement => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="w-full">
      <Box className="border-x-0 border-b border-t-0 border-solid border-b-primary-600">
        <TabsBlock value={value} onChange={handleChange} tabsData={tabsData} />
      </Box>
      <TabPanels tabsData={tabsData} value={value} />
    </Box>
  );
};

export default CustomTabs;
