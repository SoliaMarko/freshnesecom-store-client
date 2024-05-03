import {ReactElement} from 'react';

export interface MenuItemsProps {
  items: string[] | ReactElement[];
  onClick: () => void;
}
