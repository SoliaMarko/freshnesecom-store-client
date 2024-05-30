import {ReactElement, ReactNode, useState} from 'react';
import {Button, Menu} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItems from './MenuItems';
import {WithID} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

interface CustomMenuProps {
  children: ReactNode;
  header?: string;
  options: WithID<string>[] | WithID<ReactElement>[];
  handleSelectOption?: (option: string) => void;
}

const CustomMenu = ({children, header, options, handleSelectOption}: CustomMenuProps): ReactElement => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorElement(null);
  };

  const handleSelect = (option: string): void => {
    if (handleSelectOption) handleSelectOption(option);
    handleClose();
  };

  return (
    <>
      <Button
        id={`menu-${header}-button`}
        variant="outlined"
        disableElevation
        onClick={handleOpen}
        endIcon={<KeyboardArrowDownIcon className="text-secondary" />}
        className="border-none text-base font-semibold capitalize text-primary hover:bg-primary-500"
      >
        {children}
      </Button>
      <Menu
        id={`${header}-menu`}
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
          'aria-labelledby': `menu-${header}-button`
        }}
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
      >
        <MenuItems items={options} onClick={handleSelect} />
      </Menu>
    </>
  );
};

export default CustomMenu;
