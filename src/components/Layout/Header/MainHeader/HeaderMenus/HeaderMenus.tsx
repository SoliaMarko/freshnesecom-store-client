import BasketButton from '@/components/Custom/Buttons/HeaderButtons/BasketButton';
import FavoritesButton from '@/components/Custom/Buttons/HeaderButtons/FavoritesButton';
import HamburgerMenuButton from '@/components/Custom/Buttons/HeaderButtons/HamburgerMenuButton.tsx';
import UserButton from '@/components/Custom/Buttons/HeaderButtons/UserButton';
import {selectUser} from '@/store/slices/user.slice';
import {Box} from '@mui/material';
import clsx from 'clsx';
import {ReactElement} from 'react';
import {useSelector} from 'react-redux';

interface HeaderMenusProps {
  classNames?: string;
}

const HeaderMenus = ({classNames}: HeaderMenusProps): ReactElement => {
  const user = useSelector(selectUser);

  return (
    <Box className={clsx('flex gap-4', classNames)}>
      <UserButton />
      {user.authorized && <FavoritesButton />}
      <BasketButton />
      <HamburgerMenuButton classNames="md:hidden" />
    </Box>
  );
};

export default HeaderMenus;
