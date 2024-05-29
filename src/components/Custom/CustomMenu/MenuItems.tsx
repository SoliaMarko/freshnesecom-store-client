import {ReactElement} from 'react';
import {MenuItem} from '@mui/material';
import {WithID} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

interface MenuItemsProps {
  items: WithID<string>[] | WithID<ReactElement>[];
  onClick: (option: string) => void;
}

const MenuItems = ({items, onClick}: MenuItemsProps): ReactElement[] => {
  return items.map((item): ReactElement => {
    const {id, value} = item;

    return (
      <MenuItem key={id} onClick={() => onClick(value as string)} disableRipple>
        {value}
      </MenuItem>
    );
  });
};

export default MenuItems;
