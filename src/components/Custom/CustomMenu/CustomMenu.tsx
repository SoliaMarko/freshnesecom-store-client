import {ReactElement, ReactNode, useState} from 'react';
import {Button, Menu} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItems from './MenuItems';

interface CustomMenuProps {
  children: ReactNode;
  options: string[] | ReactElement[];
}

const CustomMenu = ({children, options}: CustomMenuProps): ReactElement => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorElement(null);
  };

  return (
    <>
      <Button
        id={`menu-${children}-button`}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon className="text-secondary" />}
        className="border-none text-base font-semibold capitalize text-primary hover:bg-primary-500"
      >
        {children}
      </Button>
      <Menu
        id={`${children}-menu`}
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        MenuListProps={{
          'aria-labelledby': `menu-${children}-button`
        }}
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
      >
        <MenuItems items={options} onClick={handleClose} />
      </Menu>
    </>
  );
};

export default CustomMenu;
