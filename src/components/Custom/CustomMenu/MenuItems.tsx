import {ReactElement} from 'react';
import {MenuItem} from '@mui/material';
import {MenuItemsProps} from '@/interfaces/props/Custom/Menus/menuItemsProps.interface';

const MenuItems = ({items, onClick}: MenuItemsProps): ReactElement[] =>
  items.map(
    (item, index): ReactElement => (
      <MenuItem key={`${index}-${item}`} onClick={onClick} disableRipple>
        {item}
      </MenuItem>
    )
  );

export default MenuItems;
