import {ReactElement} from 'react';
import {Chip} from '@mui/material';
import clsx from 'clsx';
import {useId} from 'react-id-generator';

interface CustomChipProps {
  value: string | number;
  textColor?: string;
  bgColor?: string;
  paddingX?: number;
}

const CustomChip = ({value, textColor, bgColor, paddingX}: CustomChipProps): ReactElement => {
  const handleClick = (): void => {
    console.info('Chip clicked');
  };

  const [keyID] = useId();

  return (
    <Chip
      key={keyID}
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
