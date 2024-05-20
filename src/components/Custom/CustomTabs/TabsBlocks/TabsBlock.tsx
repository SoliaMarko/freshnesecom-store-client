import {ReactElement, SyntheticEvent} from 'react';
import {TabDataInterface} from '../CustomTabs';
import {Box, Tab, Tabs, Typography} from '@mui/material';
import CustomChip from '../../CustomChips/CustomChip';

interface TabsBlockProps {
  value: number;
  onChange: (_event: SyntheticEvent, newValue: number) => void;
  tabsData: TabDataInterface[];
}

const TabsBlock = ({value, onChange, tabsData: tabs}: TabsBlockProps): ReactElement => {
  return (
    <Tabs value={value} onChange={onChange} TabIndicatorProps={{className: 'bg-primary'}} textColor="inherit">
      {tabs.map((tab: TabDataInterface): ReactElement => {
        const {id, label, hasLabelChip, content} = tab;
        const tabContentLength = content?.length;
        const tabLabel = (
          <Box className="flex flex-row items-center gap-3">
            <Typography className="customH3 m-0 capitalize">{label}</Typography>
            {hasLabelChip && <CustomChip value={tabContentLength || 0} />}
          </Box>
        );

        return <Tab key={id} label={tabLabel} />;
      })}
    </Tabs>
  );
};

export default TabsBlock;
