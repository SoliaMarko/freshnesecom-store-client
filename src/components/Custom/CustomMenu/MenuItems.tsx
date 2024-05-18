import {ReactElement} from 'react';
import {MenuItem} from '@mui/material';
import {WithID} from '@/utils/productsHelpers/getTransformedArrayWithIDs';

interface MenuItemsProps {
  items: WithID<string>[] | WithID<ReactElement>[];
  onClick: () => void;
}

const MenuItems = ({items, onClick}: MenuItemsProps): ReactElement[] => {
  return items.map((item): ReactElement => {
    const {id, value} = item;

    return (
      <MenuItem key={id} onClick={onClick} disableRipple>
        {value}
      </MenuItem>
    );
  });
};

export default MenuItems;
