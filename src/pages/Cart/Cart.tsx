import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import {storeInfo, commonRoutes} from '@/constants/globalConstants/global.constant';
import StyledNavLink from '@/components/Custom/Links/StyledNavLink';
import {NavLink} from 'react-router-dom';
import PrimaryButton from '@/components/Custom/Buttons/PrimaryButton';

const Cart = (): ReactElement => {
  return (
    <Box className="my-48 flex flex-col gap-12">
      <Typography className="customH1" align="center">{`Your ${storeInfo.NAME} Cart is empty`}</Typography>
      <StyledNavLink to={commonRoutes.ROOT} size="2xl">
        Shop now
      </StyledNavLink>
      <Box className="flex justify-center gap-12">
        <NavLink to={`/${commonRoutes.LOGIN}`}>
          <PrimaryButton>Log In</PrimaryButton>
        </NavLink>
        <NavLink to={`/${commonRoutes.SIGNUP}`}>
          <PrimaryButton variant="outlined">Sign Up</PrimaryButton>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Cart;
