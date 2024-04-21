import {ReactElement} from 'react';
import {Divider} from '@mui/material';
import Navigation from '../Navigation/Navigation';

const Header = (): ReactElement => {
  return (
    <>
      <Navigation />
      <Divider />
    </>
  );
};

export default Header;
