import {ReactElement, ReactNode} from 'react';
import {Button} from '@mui/material';
import clsx from 'clsx';

interface PrimaryButtonProps {
  children: ReactNode;
  variant?: 'filled' | 'outlined';
}

const PrimaryButton = ({children, variant = 'filled'}: PrimaryButtonProps): ReactElement => {
  return (
    <Button
      type="submit"
      className={clsx('w-56 rounded-xl border-2 border-solid border-secondary-200 px-12 py-3 text-base font-bold', {
        'bg-secondary text-white': variant === 'filled',
        'bg-white text-secondary': variant !== 'filled'
      })}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
