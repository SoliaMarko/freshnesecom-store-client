import {ReactElement, ReactNode} from 'react';
import {Button} from '@mui/material';
import clsx from 'clsx';

interface PrimaryButtonProps {
  children: ReactNode;
  type?: 'filled' | 'outlined';
  onClickHandler?: () => void;
  classNames?: string;
}

const PrimaryButton = ({children, type = 'filled', onClickHandler, classNames}: PrimaryButtonProps): ReactElement => {
  const handleClick = (): void => {
    onClickHandler?.();
  };

  return (
    <Button
      type="submit"
      className={clsx('rounded-xl border-2 border-solid border-secondary-200 px-1 py-1 capitalize md:px-5 md:py-3', classNames, {
        'bg-secondary text-white': type === 'filled',
        'bg-white text-secondary': type === 'outlined'
      })}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
