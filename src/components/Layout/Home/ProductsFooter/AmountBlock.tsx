import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import CustomChip from '@/components/Custom/CustomChips/CustomChip';

interface AmountBlockProps {
  value: string | number;
  label?: string;
}

const AmountBlock = ({value, label}: AmountBlockProps): ReactElement => {
  return (
    <Box className="flex flex-1 flex-row items-center justify-end gap-3">
      <CustomChip value={value} classNames="text-secondary bg-secondary-500 px-2" />
      <Typography className="capitalize text-secondary">{label}</Typography>
    </Box>
  );
};

export default AmountBlock;
