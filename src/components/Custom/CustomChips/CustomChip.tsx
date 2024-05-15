import {ReactElement} from 'react';
import {Chip} from '@mui/material';
import clsx from 'clsx';

interface CustomChipProps {
  value: string | number;
  index?: number;
  textColor?: string;
  bgColor?: string;
  paddingX?: number;
}

const CustomChip = ({value, index, textColor, bgColor, paddingX}: CustomChipProps): ReactElement => {
  const handleClick = (): void => {
    console.info('Chip clicked');
  };

  return (
    <Chip
      key={index}
      label={value}
      variant="outlined"
      className={clsx(
        'rounded-2xl border-transparent bg-primary-600 px-2.5 py-1 font-display text-sm font-semibold text-primary',
        `text-${textColor}`,
        `bg-${bgColor}`,
        `px-${paddingX}`
      )}
      onClick={handleClick}
    />
  );
};

export default CustomChip;
