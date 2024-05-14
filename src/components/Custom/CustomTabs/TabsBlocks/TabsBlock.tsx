import {ReactElement, SyntheticEvent} from 'react';
import {TabDataInterface} from '../CustomTabs';
import {Box, Tab, Tabs, Typography} from '@mui/material';
import CustomChip from '../../CustomChips/CustomChip';

interface TabsBlockProps {
  value: number;
  onChange: (_event: SyntheticEvent, newValue: number) => void;
  tabsData: TabDataInterface[];
}

const TabsBlock = ({value, onChange, tabsData}: TabsBlockProps): ReactElement => {
  return (
    <Tabs value={value} onChange={onChange} TabIndicatorProps={{className: 'bg-primary'}} textColor="inherit">
      {tabsData.map((tab: TabDataInterface, index: number): ReactElement => {
        const tabContentLength = tab.content?.length;
        const tabLabel = (
          <Box className="flex flex-row items-center gap-3">
            <Typography className="customH3 m-0 capitalize">{tab.label}</Typography>
            {tab.hasLabelChip && <CustomChip value={tabContentLength || 0} />}
          </Box>
        );

        return <Tab key={index} label={tabLabel} />;
      })}
    </Tabs>
  );
};

export default TabsBlock;
