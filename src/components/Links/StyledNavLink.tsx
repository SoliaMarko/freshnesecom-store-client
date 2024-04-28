import {ReactElement, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import {fontSizes} from '@/constants/globalConstants/global.constant';
import {FontSizeKey} from '@/types/global.type';

const StyledNavLink = ({children, to, size = 5}: {children: ReactNode; to: string; size?: FontSizeKey}): ReactElement => {
  return (
    <NavLink to={to} className={`text-${fontSizes[size]} text-secondary no-underline hover:text-red-500 hover:underline`}>
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
