import {Drawer, IconButton} from '@mui/material';
import {ReactElement, useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import clsx from 'clsx';
import MenusBlock from '@/components/Layout/Header/MenusBlock/MenusBlock';

interface HamburgerMenuButtonProps {
  classNames?: string;
}

const HamburgerMenuButton = ({classNames}: HamburgerMenuButtonProps): ReactElement => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (value: boolean): void => {
    setIsDrawerOpen(value);
  };

  const handleOpenDrawer = (): void => {
    toggleDrawer(true);
  };

  const handleCloseDrawer = (): void => {
    toggleDrawer(false);
  };

  return (
    <>
      <IconButton onClick={handleOpenDrawer}>
        <MenuIcon className={clsx('text-2xl text-primary sm:text-3xl', classNames)} />
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={handleCloseDrawer} anchor="right" variant="temporary">
        <MenusBlock />
      </Drawer>
    </>
  );
};

export default HamburgerMenuButton;
