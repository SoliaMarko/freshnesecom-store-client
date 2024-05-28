import {userRoutes} from '@/constants/globalConstants/global.constant';
import {Box, IconButton} from '@mui/material';
import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CustomBadge from '@/components/Custom/CustomBadge/CustomBadge';

const FavoritesButton = (): ReactElement => {
  // temporal variable
  const productsInWishes = 0;

  return (
    <NavLink to={`/${userRoutes.USER}/${userRoutes.FAVORITE}`}>
      <Box className="relative">
        <IconButton>
          <FavoriteBorderIcon className="text-3xl text-primary" />
          <CustomBadge content={productsInWishes.toString()} alignX="left" alignY="bottom" />
        </IconButton>
      </Box>
    </NavLink>
  );
};

export default FavoritesButton;
