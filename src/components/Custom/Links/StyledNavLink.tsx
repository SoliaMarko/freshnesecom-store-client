import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import {StyledNavLinkProps} from '@/interfaces/props/CustomProps/Links/styledNavLinkProps.interface';
import clsx from 'clsx';

const StyledNavLink = ({children, to, size = 'sm'}: StyledNavLinkProps): ReactElement => {
  return (
    <NavLink to={to} className={clsx('text-secondary', `text-${size}`, 'no-underline', 'hover:text-red-500', 'hover:underline')}>
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
