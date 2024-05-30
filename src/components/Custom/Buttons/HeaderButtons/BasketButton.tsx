import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {Box, IconButton} from '@mui/material';
import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CustomBadge from '@/components/Custom/CustomBadge/CustomBadge';

const BasketButton = (): ReactElement => {
  // temporal variable
  const productsInBasket = 0;

  return (
    <NavLink to={`/${commonRoutes.CART}`}>
      <Box className="relative">
        <IconButton>
          <ShoppingBasketIcon className="text-3xl text-primary" />
          <CustomBadge content={productsInBasket} alignX="left" alignY="bottom" />
        </IconButton>
      </Box>
    </NavLink>
  );
};

export default BasketButton;
