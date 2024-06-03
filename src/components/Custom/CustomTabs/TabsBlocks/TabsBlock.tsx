import {ReactElement, SyntheticEvent} from 'react';
import {TabDataInterface} from '../CustomTabs';
import {Box, Tab, Tabs, Typography} from '@mui/material';
import CustomChip from '../../CustomChip/CustomChip';

interface TabsBlockProps {
  value: number;
  onChange: (_event: SyntheticEvent, newValue: number) => void;
  tabsData: TabDataInterface[];
}

const TabsBlock = ({value, onChange, tabsData: tabs}: TabsBlockProps): ReactElement => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      TabIndicatorProps={{className: 'bg-primary'}}
      textColor="inherit"
      className="flex flex-row justify-between"
    >
      {tabs.map((tab: TabDataInterface): ReactElement => {
        const {id, header, hasHeaderChip, content} = tab;
        const tabContentLength = content?.length;
        const tabLabel = (
          <Box className="flex flex-row items-center gap-1 sm:gap-3">
            <Typography className="m-0 text-xs font-semibold capitalize sm:text-lg">{header}</Typography>
            {hasHeaderChip && <CustomChip value={tabContentLength || 0} />}
          </Box>
        );

        return <Tab key={id} label={tabLabel} className="flex-1" />;
      })}
    </Tabs>
  );
};

export default TabsBlock;
