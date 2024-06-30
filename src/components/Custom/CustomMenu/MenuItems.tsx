import {ReactElement} from 'react';
import {MenuItem} from '@mui/material';
import {ItemWithIDType} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

interface MenuItemsProps {
  items: ItemWithIDType<string>[] | ItemWithIDType<ReactElement>[];
  onClick: (option: string) => void;
}

const MenuItems = ({items, onClick}: MenuItemsProps): ReactElement[] => {
  return items.map((item): ReactElement => {
    const {id, value} = item;

    return (
      <MenuItem key={id} onClick={() => onClick(value as string)} className="bg-primary-700 hover:bg-primary-500" disableRipple>
        {value}
      </MenuItem>
    );
  });
};

export default MenuItems;
