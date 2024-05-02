import {ReactElement} from 'react';
import {userRoutes} from '@/constants/globalConstants/global.constant';
import {Button} from '@mui/material';
import {NavLink} from 'react-router-dom';

const ProfileButton = (): ReactElement => {
  return (
    <NavLink to={`/${userRoutes.USER}/${userRoutes.PROFILE}`}>
      <Button>Profile</Button>
    </NavLink>
  );
};

export default ProfileButton;
