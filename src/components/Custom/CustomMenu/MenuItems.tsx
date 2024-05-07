import {ReactElement} from 'react';
import {MenuItem} from '@mui/material';

interface MenuItemsProps {
  items: string[] | ReactElement[];
  onClick: () => void;
}

const MenuItems = ({items, onClick}: MenuItemsProps): ReactElement[] =>
  items.map(
    (item, index): ReactElement => (
      <MenuItem key={`${index}-${item}`} onClick={onClick} disableRipple>
        {item}
      </MenuItem>
    )
  );

export default MenuItems;
