import {ReactElement, ReactNode} from 'react';
import {Box, Typography} from '@mui/material';

interface CustomTabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = ({children, index, value}: CustomTabPanelProps): ReactElement => {
  return (
    <Box role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box className="p-6">
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default CustomTabPanel;
