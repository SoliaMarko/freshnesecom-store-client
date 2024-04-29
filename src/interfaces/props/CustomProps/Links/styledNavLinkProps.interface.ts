import {ReactNode} from 'react';
import {FontSizeKey} from '@/types/global.type';

export interface StyledNavLinkProps {
  children: ReactNode;
  to: string;
  size?: FontSizeKey;
}
