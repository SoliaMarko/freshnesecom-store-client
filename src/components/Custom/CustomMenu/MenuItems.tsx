import {ReactElement} from 'react';
import {MenuItem} from '@mui/material';
import {useId} from 'react-id-generator';

interface MenuItemsProps {
  items: string[] | ReactElement[];
  onClick: () => void;
}

const MenuItems = ({items, onClick}: MenuItemsProps): ReactElement[] => {
  return items.map((item): ReactElement => {
    const [keyID] = useId();

    return (
      <MenuItem key={keyID} onClick={onClick} disableRipple>
        {item}
      </MenuItem>
    );
  });
};

export default MenuItems;
