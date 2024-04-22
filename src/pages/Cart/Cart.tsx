import {ReactElement} from 'react';
import {Box} from '@mui/material';
import StyledHeader from '@/components/Headers/StyledHeader';
import {storeInfo, routes} from '@/constants/global.constant';
import StyledNavLink from '@/components/Links/StyledNavLink';
import {NavLink} from 'react-router-dom';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

const Cart = (): ReactElement => {
  return (
    <Box className="my-48 flex flex-col gap-12">
      <StyledHeader align="center" size={1}>
        {`Your ${storeInfo.NAME} Cart is empty`}
      </StyledHeader>
      <StyledNavLink to={routes.ROOT} size={2}>
        Shop now
      </StyledNavLink>
      <Box className="flex justify-center gap-12">
        <NavLink to={`/${routes.LOGIN}`}>
          <PrimaryButton>Log In</PrimaryButton>
        </NavLink>
        <NavLink to={`/${routes.SIGNUP}`}>
          <PrimaryButton variant="outlined">Sign Up</PrimaryButton>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Cart;
