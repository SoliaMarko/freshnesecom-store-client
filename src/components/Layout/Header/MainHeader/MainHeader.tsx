import {ReactElement} from 'react';
import {Badge, Box, IconButton} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchBar from './SearchBar/SearchBar';
import {NavLink} from 'react-router-dom';

const MainHeader = (): ReactElement => {
  return (
    <Box className="my-2 flex items-center justify-between ">
      <Box className="py-4 text-lg">[LOGO]</Box>
      <SearchBar />
      <Box className="flex gap-4">
        <NavLink to="#">
          <IconButton>
            <PersonOutlineIcon className="text-3xl text-primary" />
          </IconButton>
        </NavLink>
        <NavLink to="#">
          <Box className="relative">
            <IconButton>
              <ShoppingBasketIcon className="text-3xl text-primary" />
            </IconButton>
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              overlap="circular"
              badgeContent={4}
              color="success"
              className="text-success absolute bottom-0 left-0"
            ></Badge>
          </Box>
        </NavLink>
      </Box>
    </Box>
  );
};

export default MainHeader;
