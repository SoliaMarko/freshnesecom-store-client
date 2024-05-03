import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import {Box, Button, IconButton} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchBar from './SearchBar/SearchBar';
import CustomBadge from '@/components/Custom/CustomBadge/CustomBadge';
import CustomMenu from '@/components/Custom/CustomMenu/CustomMenu';
import {commonRoutes, userRoutes} from '@/constants/globalConstants/global.constant';

const MainHeader = (): ReactElement => {
  const authorized = false;

  const userPopover = (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
      {authorized ? (
        <>
          <NavLink to={`/${userRoutes.USER}/${userRoutes.PROFILE}`}>
            <Button>Profile</Button>
          </NavLink>
          <NavLink to="#">
            <Button>Log Out</Button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to={`/${commonRoutes.LOGIN}`}>
            <Button>Log In</Button>
          </NavLink>
          <NavLink to={`/${commonRoutes.SIGNUP}`}>
            <Button>Sign Up</Button>
          </NavLink>
        </>
      )}
    </Box>
  );

  return (
    <Box className="my-2 flex items-center justify-between ">
      <NavLink to={`${commonRoutes.ROOT}`}>
        <Box className="py-4 text-lg">[LOGO]</Box>
      </NavLink>
      <SearchBar />
      <Box className="flex gap-4">
        <CustomMenu options={[userPopover]}>
          <PersonOutlineIcon className="text-3xl text-primary" />
        </CustomMenu>
        {authorized ? (
          <NavLink to={`/${userRoutes.USER}/${userRoutes.FAVORITE}`}>
            <Box className="relative">
              <IconButton>
                <FavoriteBorderIcon className="text-3xl text-primary" />
                <CustomBadge content="4" alignX="left" alignY="bottom" />
              </IconButton>
            </Box>
          </NavLink>
        ) : (
          ''
        )}
        <NavLink to={`/${commonRoutes.CART}`}>
          <Box className="relative">
            <IconButton>
              <ShoppingBasketIcon className="text-3xl text-primary" />
              <CustomBadge content="4" alignX="left" alignY="bottom" />
            </IconButton>
          </Box>
        </NavLink>
      </Box>
    </Box>
  );
};

export default MainHeader;
