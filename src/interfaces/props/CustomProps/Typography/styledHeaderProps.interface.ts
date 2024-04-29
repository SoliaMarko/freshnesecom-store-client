import {ReactNode} from 'react';
import {FontSizeKey} from '@/types/global.type';

export interface StyledHeaderProps {
  children: ReactNode;
  align?: string;
  size?: FontSizeKey;
}
