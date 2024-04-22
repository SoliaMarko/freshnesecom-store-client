import {Chip} from '@mui/material';
import {ReactElement} from 'react';

const StyledChip = ({product, index}: {product: string; index: number}): ReactElement => {
  const handleClick = () => {
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
