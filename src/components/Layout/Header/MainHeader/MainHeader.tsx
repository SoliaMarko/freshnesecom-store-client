import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import {Box} from '@mui/material';
import SearchBar from './SearchBar/SearchBar';
import {productRoutes} from '@/constants/globalConstants/global.constant';
import logo from '@assets/logo.svg';
import HeaderMenus from './HeaderMenus/HeaderMenus';

const MainHeader = (): ReactElement => {
  return (
    <Box className="my-2 flex flex-col items-center justify-between gap-3 md:flex-row">
      <Box className="flex w-full flex-row items-center justify-between md:w-auto">
        <NavLink to={`/${productRoutes.PRODUCTS}`} className="order-1 md:order-1">
          <img src={logo} alt="logo" className="w-36 py-4 sm:w-full" />
        </NavLink>
        <HeaderMenus classNames="order-2 md:hidden" />
      </Box>

      <SearchBar classNames="order-3 md:order-2" />
      <HeaderMenus classNames="hidden md:order-3 md:flex" />
    </Box>
  );
};

export default MainHeader;
