import {ReactElement, SyntheticEvent, useState} from 'react';
import {Box} from '@mui/material';
import {AdditionalDescription} from '@/interfaces/products/productEntity.interface';
import TabPanels from './TabPanels/TabPanels';
import TabsBlock from './TabsBlocks/TabsBlock';
import {ItemWithIDType} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

export interface TabDataInterface {
  header: string;
  id: string;
  hasHeaderChip: boolean;
  content?: ItemWithIDType<AdditionalDescription>[];
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
    <>
      <Box className="border-0 border-solid border-b-primary-600">
        <TabsBlock value={value} onChange={handleChange} tabsData={tabsData} />
      </Box>
      <TabPanels tabs={tabsData} value={value} />
    </>
  );
};

export default CustomTabs;
