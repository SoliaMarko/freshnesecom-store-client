import {Button} from '@mui/material';
import {ReactElement, ReactNode} from 'react';

interface SecondaryButtonProps {
  children: ReactNode;
  onClickHandler?: () => void;
}

const SecondaryButton = ({children, onClickHandler}: SecondaryButtonProps): ReactElement => {
  const handleClick = (): void => {
    onClickHandler && onClickHandler();
  };

  return (
    <Button
      type="submit"
      className="flex min-w-56 flex-row items-center justify-between rounded-xl bg-primary-600 px-6 py-1.5 capitalize text-primary"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
