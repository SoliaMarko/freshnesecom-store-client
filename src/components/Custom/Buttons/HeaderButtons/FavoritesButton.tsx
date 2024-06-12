import {userRoutes} from '@/constants/globalConstants/global.constant';
import {Box, IconButton} from '@mui/material';
import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CustomBadge from '@/components/Custom/CustomBadge/CustomBadge';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';

const FavoritesButton = (): ReactElement => {
  const {wishedProductIDs} = useSelector((state: IRootState) => state.wishlist);
  const productsInWishes = wishedProductIDs.length;

  return (
    <NavLink to={`/${userRoutes.USER}/${userRoutes.FAVORITES}`}>
      <Box className="relative">
        <IconButton>
          <FavoriteBorderIcon className="text-2xl text-primary sm:text-3xl" />
          <CustomBadge content={productsInWishes} alignX="left" alignY="bottom" />
        </IconButton>
      </Box>
    </NavLink>
  );
};

export default FavoritesButton;
