import {ReactElement} from 'react';
import {Divider} from '@mui/material';
import Navigation from './Navigation/Navigation';
import MainHeader from './MainHeader/MainHeader';
import Menus from './MenusBlock/MenusBlock';

const Header = (): ReactElement => {
  return (
    <header>
      <Navigation />
      <Divider />
      <MainHeader />
      <Menus />
    </header>
  );
};

export default Header;
