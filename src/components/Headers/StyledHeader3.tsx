import {Typography} from '@mui/material';
import {ReactElement} from 'react';

const StyledHeader3 = ({children}: {children: string}): ReactElement => {
  return <Typography className="mb-4 text-left font-display text-lg font-semibold">{children}</Typography>;
};

export default StyledHeader3;
