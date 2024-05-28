import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import {Box} from '@mui/material';
import SearchBar from './SearchBar/SearchBar';
import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {selectUser} from '@/store/slices/user.slice';
import {useSelector} from 'react-redux';
import FavoritesButton from '@/components/Custom/Buttons/HeaderButtons/FavoritesButton';
import UserButton from '@/components/Custom/Buttons/HeaderButtons/UserButton';
import BasketButton from '@/components/Custom/Buttons/HeaderButtons/BasketButton';
import logo from '@assets/logo.svg';

const MainHeader = (): ReactElement => {
  const user = useSelector(selectUser);

  return (
    <Box className="my-2 flex items-center justify-between">
      <NavLink to={commonRoutes.ROOT}>
        <img src={logo} alt="logo" className="py-4" />
      </NavLink>
      <SearchBar />
      <Box className="flex gap-4">
        <UserButton />
        {user.authorized && <FavoritesButton />}
        <BasketButton />
      </Box>
    </Box>
  );
};

export default MainHeader;
