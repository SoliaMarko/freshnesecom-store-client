import {MenuItem} from '@mui/material';
import {ReactElement} from 'react';

const MenuItems = ({items, onClick}: {items: string[] | ReactElement[]; onClick: () => void}): ReactElement[] =>
  items.map(
    (item, index): ReactElement => (
      <MenuItem key={`${index}-${item}`} onClick={onClick} disableRipple>
        {item}
      </MenuItem>
    )
  );

export default MenuItems;
