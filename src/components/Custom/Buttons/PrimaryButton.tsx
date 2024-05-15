import {ReactElement, ReactNode} from 'react';
import {Button} from '@mui/material';
import clsx from 'clsx';

interface PrimaryButtonProps {
  children: ReactNode;
  type?: 'filled' | 'outlined';
  onClickHandler?: () => void;
}

const PrimaryButton = ({children, type = 'filled', onClickHandler}: PrimaryButtonProps): ReactElement => {
  const handleClick = (): void => {
    onClickHandler?.();
  };

  return (
    <Button
      type="submit"
      className={clsx('min-w-56 rounded-xl border-2 border-solid border-secondary-200 p-3 capitalize', {
        'bg-secondary text-white': type === 'filled',
        'bg-white text-secondary': type !== 'filled'
      })}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
