import {ReactElement, ReactNode} from 'react';

export interface CustomMenuProps {
  children: ReactNode;
  options: string[] | ReactElement[];
}
