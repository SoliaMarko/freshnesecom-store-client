import {Box, IconButton, SwipeableDrawer} from '@mui/material';
import {ReactElement, useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
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
    <Box className={classNames}>
      <IconButton onClick={handleOpenDrawer}>
        <MenuIcon className="text-2xl text-primary sm:text-3xl" />
      </IconButton>
      <SwipeableDrawer
        open={isDrawerOpen}
        onOpen={handleOpenDrawer}
        onClose={handleCloseDrawer}
        anchor="right"
        ModalProps={{
          keepMounted: false
        }}
      >
        <MenusBlock />
      </SwipeableDrawer>
    </Box>
  );
};

export default HamburgerMenuButton;
