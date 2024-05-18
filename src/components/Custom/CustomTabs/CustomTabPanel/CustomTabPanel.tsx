import {ReactElement, ReactNode} from 'react';
import {Box} from '@mui/material';

interface CustomTabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = ({children, index, value}: CustomTabPanelProps): ReactElement => {
  return (
    <Box role="tabpanel" hidden={value !== index}>
      {value === index && <Box className="p-6">{children}</Box>}
    </Box>
  );
};

export default CustomTabPanel;
