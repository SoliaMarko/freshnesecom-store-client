import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {Button} from '@mui/material';
import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';

const LogInButton = (): ReactElement => {
  return (
    <NavLink to={`/${commonRoutes.LOGIN}`}>
      <Button>Log In</Button>
    </NavLink>
  );
};

export default LogInButton;
