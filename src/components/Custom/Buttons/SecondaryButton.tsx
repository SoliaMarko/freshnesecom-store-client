import {Button} from '@mui/material';
import clsx from 'clsx';
import {ReactElement, ReactNode} from 'react';

interface SecondaryButtonProps {
  children: ReactNode;
  onClickHandler?: () => void;
  classNames?: string;
}

const SecondaryButton = ({children, onClickHandler, classNames}: SecondaryButtonProps): ReactElement => {
  const handleClick = (): void => {
    onClickHandler && onClickHandler();
  };

  return (
    <Button
      type="submit"
      className={clsx(
        'flex min-w-40 flex-row items-center justify-between rounded-xl bg-primary-600 px-3 py-1 capitalize text-primary sm:min-w-56 sm:px-6 sm:py-1.5',
        classNames
      )}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
