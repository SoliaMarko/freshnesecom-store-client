import {ReactElement} from 'react';
import {Chip} from '@mui/material';
import {StyledChipProps} from '@/interfaces/props/CustomProps/Chips/styledChipProps.interface';

const StyledChip = ({product, index}: StyledChipProps): ReactElement => {
  const handleClick = (): void => {
    console.info('Chip clicked');
  };

  return (
    <Chip
      key={index}
      label={product}
      variant="outlined"
      className="rounded-2xl border-transparent bg-primary-600 px-2.5 py-1 font-display text-xs font-semibold"
      onClick={handleClick}
    />
  );
};

export default StyledChip;
