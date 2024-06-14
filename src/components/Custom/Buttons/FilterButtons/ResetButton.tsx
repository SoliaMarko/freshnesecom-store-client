import {Button, Typography} from '@mui/material';
import {ReactElement} from 'react';

interface ResetButtonProps {
  handleClick: () => void;
}

const ResetButton = ({handleClick}: ResetButtonProps): ReactElement => {
  return (
    <Button onClick={handleClick}>
      <Typography className="font-semibold text-primary-300">Reset</Typography>
    </Button>
  );
};

export default ResetButton;
