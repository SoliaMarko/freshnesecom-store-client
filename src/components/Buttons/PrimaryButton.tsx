import {ReactElement} from 'react';
import {Button} from '@mui/material';

const PrimaryButton = ({children}: {children: string}): ReactElement => {
  return (
    <Button
      type="submit"
      className="text-white w-56 rounded-xl border-2 border-solid border-secondary-200 bg-secondary px-12 py-3 text-base font-bold"
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
