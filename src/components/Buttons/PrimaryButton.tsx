import {ReactElement} from 'react';
import {Button} from '@mui/material';

const PrimaryButton = ({children, variant = 'filled'}: {children: string; variant?: 'filled' | 'outlined'}): ReactElement => {
  return (
    <Button
      type="submit"
      className={` w-56 rounded-xl border-2 border-solid border-secondary-200 ${variant === 'filled' ? 'bg-secondary text-white' : 'bg-white text-secondary'} px-12 py-3 text-base font-bold`}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
