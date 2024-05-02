import {userRoutes} from '@/constants/globalConstants/global.constant';
import {Box, IconButton} from '@mui/material';
import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CustomBadge from '@/components/Custom/CustomBadge/CustomBadge';

const FavoritesButton = (): ReactElement => {
  return (
    <NavLink to={`/${userRoutes.USER}/${userRoutes.FAVORITE}`}>
      <Box className="relative">
        <IconButton>
          <FavoriteBorderIcon className="text-3xl text-primary" />
          <CustomBadge content="4" alignX="left" alignY="bottom" />
        </IconButton>
      </Box>
    </NavLink>
  );
};

export default FavoritesButton;
