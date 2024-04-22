import {ReactElement, useState} from 'react';
import {Button, Menu} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItems from './MenuItems';

const CustomMenu = ({label, options}: {label: string; options: string[]}): ReactElement => {
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
        id={`menu-${label}-button`}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon className="text-secondary" />}
        className="border-none font-semibold capitalize text-primary hover:bg-primary-500"
      >
        {label}
      </Button>
      <Menu
        id={`${label}-menu`}
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
          'aria-labelledby': `menu-${label}-button`
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
