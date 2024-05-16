import {ReactElement} from 'react';
import {Chip} from '@mui/material';
import {useId} from 'react-id-generator';

interface StyledChipProps {
  product: string;
}

const StyledChip = ({product}: StyledChipProps): ReactElement => {
  const handleClick = (): void => {
    console.info('Chip clicked');
  };

  const [keyID] = useId();

  return (
    <Chip
      key={keyID}
      label={product}
      variant="outlined"
      className="rounded-2xl border-transparent bg-primary-600 px-2.5 py-1 font-display text-xs font-semibold"
      onClick={handleClick}
    />
  );
};

export default StyledChip;
