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
        'rounded-2xl border-transparent py-1 font-display text-sm font-semibold',
        {[`text-${textColor}`]: textColor, 'text-primary': !textColor},
        {[`bg-${bgColor}`]: bgColor, 'bg-primary-600': !bgColor},
        {[`px-${paddingX}`]: paddingX, 'px-2.5': !paddingX}
      )}
      onClick={handleClick}
    />
  );
};

export default CustomChip;
