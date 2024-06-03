import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import CustomChip from '@/components/Custom/CustomChip/CustomChip';
import clsx from 'clsx';

interface AmountBlockProps {
  value: string | number;
  label?: string;
  classNames?: string;
}

const AmountBlock = ({value, label, classNames}: AmountBlockProps): ReactElement => {
  return (
    <Box className={clsx('flex flex-1 flex-row items-center justify-end gap-3', classNames)}>
      <CustomChip value={value} classNames="text-secondary bg-secondary-500 px-2" />
      <Typography className="capitalize text-secondary">{label}</Typography>
    </Box>
  );
};

export default AmountBlock;
