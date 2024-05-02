import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {Button} from '@mui/material';
import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';

const SignUpButton = (): ReactElement => {
  return (
    <NavLink to={`/${commonRoutes.SIGNUP}`}>
      <Button>Sign Up</Button>
    </NavLink>
  );
};

export default SignUpButton;
