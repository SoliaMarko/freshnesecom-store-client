import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import {Box, Button, IconButton} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchBar from './SearchBar/SearchBar';
import CustomBadge from '@/components/CustomBadge/CustomBadge';
import CustomMenu from '@/components/CustomMenu/CustomMenu';

const MainHeader = (): ReactElement => {
  const authorized = false;

  const userPopover = (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
      {authorized ? (
        <>
          <Button>Profile</Button>
          <Button>Log Out</Button>
        </>
      ) : (
        <>
          <Button>Sign Up</Button>
          <Button>Log In</Button>
        </>
      )}
    </Box>
  );

  return (
    <Box className="my-2 flex items-center justify-between ">
      <Box className="py-4 text-lg">[LOGO]</Box>
      <SearchBar />
      <Box className="flex gap-4">
        <CustomMenu options={[userPopover]}>
          <PersonOutlineIcon className="text-3xl text-primary" />
        </CustomMenu>
        <NavLink to="#">
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
