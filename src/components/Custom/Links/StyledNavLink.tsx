import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import {fontSizes} from '@/constants/globalConstants/global.constant';
import {StyledNavLinkProps} from '@/interfaces/props/Custom/Links/styledNavLinkProps.interface';

const StyledNavLink = ({children, to, size = 5}: StyledNavLinkProps): ReactElement => {
  return (
    <NavLink to={to} className={`text-${fontSizes[size]} text-secondary no-underline hover:text-red-500 hover:underline`}>
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
