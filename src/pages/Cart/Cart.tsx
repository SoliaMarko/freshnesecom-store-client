import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import {storeInfo, commonRoutes, productRoutes} from '@/constants/globalConstants/global.constant';
import StyledNavLink from '@/components/Custom/Links/StyledNavLink';
import {NavLink} from 'react-router-dom';
import PrimaryButton from '@/components/Custom/Buttons/PrimaryButton';
import {selectUser} from '@/store/slices/user.slice';
import {useAppSelector} from '@/hooks/api/apiHooks';
import ProductsNotFound from '@/components/Layout/AllProducts/ProductsNotFound/ProductsNotFound';

const Cart = (): ReactElement => {
  const user = useAppSelector(selectUser);

  return (
    <Box className="mb-24 mt-12 flex flex-col gap-6 md:mb-52 md:mt-12 md:gap-12">
      <ProductsNotFound>
        <Typography className="customH2">{`Your ${storeInfo.NAME} Cart is empty`}</Typography>
        <StyledNavLink to={`/${productRoutes.PRODUCTS}`} classNames="text-2xl">
          Shop now
        </StyledNavLink>
      </ProductsNotFound>
      {!user.authorized && (
        <Box className="flex justify-center gap-12">
          <NavLink to={`/${commonRoutes.LOGIN}`}>
            <PrimaryButton>
              <Typography className="text-lg font-semibold">Log In</Typography>
            </PrimaryButton>
          </NavLink>
          <NavLink to={`/${commonRoutes.SIGNUP}`}>
            <PrimaryButton type="outlined">
              <Typography className="text-lg font-semibold">Sign Up</Typography>
            </PrimaryButton>
          </NavLink>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
