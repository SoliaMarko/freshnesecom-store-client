import {ReactElement} from 'react';
import {Divider} from '@mui/material';
import Navigation from './Navigation/Navigation';
import MainHeader from './MainHeader/MainHeader';
import MenusBlock from './MenusBlock/MenusBlock';

const Header = (): ReactElement => {
  return (
    <header>
      <Navigation />
      <Divider />
      <MainHeader />
      <MenusBlock classNames="hidden xl:flex" />
    </header>
  );
};

export default Header;
