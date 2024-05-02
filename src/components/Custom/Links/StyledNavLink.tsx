import {ReactElement, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import clsx from 'clsx';

interface StyledNavLinkProps {
  children: ReactNode;
  to: string;
  size?: string;
}

const StyledNavLink = ({children, to, size = 'sm'}: StyledNavLinkProps): ReactElement => {
  return (
    <NavLink to={to} className={clsx('text-secondary', `text-${size}`, 'no-underline', 'hover:text-red-500', 'hover:underline')}>
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
