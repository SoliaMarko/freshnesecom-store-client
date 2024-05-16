import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {Button, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';

const SignUpButton = (): ReactElement => {
  return (
    <NavLink to={`/${commonRoutes.SIGNUP}`}>
      <Button>
        <Typography sx={{textTransform: 'capitalize'}}>Sign Up</Typography>
      </Button>
    </NavLink>
  );
};

export default SignUpButton;
