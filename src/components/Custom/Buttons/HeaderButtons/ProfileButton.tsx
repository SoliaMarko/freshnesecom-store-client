import {ReactElement} from 'react';
import {userRoutes} from '@/constants/globalConstants/global.constant';
import {Button, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';

const ProfileButton = (): ReactElement => {
  return (
    <NavLink to={`/${userRoutes.USER}`}>
      <Button>
        <Typography>Profile</Typography>
      </Button>
    </NavLink>
  );
};

export default ProfileButton;
