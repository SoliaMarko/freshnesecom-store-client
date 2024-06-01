import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {Button, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';

const LogInButton = (): ReactElement => {
  return (
    <NavLink to={`/${commonRoutes.LOGIN}`}>
      <Button>
        <Typography>Log In</Typography>
      </Button>
    </NavLink>
  );
};

export default LogInButton;
