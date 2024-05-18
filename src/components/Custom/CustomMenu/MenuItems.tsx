import {ReactElement} from 'react';
import {MenuItem} from '@mui/material';
import {WithID} from '@/utils/productsHelpers/getTransformedArrayWithIDs';

interface MenuItemsProps {
  items: WithID<string>[] | WithID<ReactElement>[];
  onClick: () => void;
}

const MenuItems = ({items, onClick}: MenuItemsProps): ReactElement[] => {
  return items.map((item): ReactElement => {
    const {id, values} = item;

    return (
      <MenuItem key={id} onClick={onClick} disableRipple>
        {values}
      </MenuItem>
    );
  });
};

export default MenuItems;
