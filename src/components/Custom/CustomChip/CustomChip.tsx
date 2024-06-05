import {ReactElement} from 'react';
import {Chip} from '@mui/material';
import clsx from 'clsx';

interface CustomChipProps {
  value: string | number;
  classNames?: string;
}

const CustomChip = ({value, classNames}: CustomChipProps): ReactElement => {
  const handleClick = (): void => {
    console.info('Chip clicked');
  };

  return (
    <Chip
      label={value}
      variant="outlined"
      className={clsx(
        'rounded-2xl border-transparent bg-primary-600 p-1 font-display text-xs font-semibold text-primary sm:px-2.5 sm:text-sm',
        classNames
      )}
      onClick={handleClick}
    />
  );
};

export default CustomChip;
