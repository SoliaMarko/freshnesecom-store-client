import {ReactElement, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import clsx from 'clsx';

interface StyledNavLinkProps {
  children: ReactNode;
  to: string;
  classNames?: string;
}

const StyledNavLink = ({children, to, classNames = 'text-medium'}: StyledNavLinkProps): ReactElement => {
  return (
    <NavLink to={to} className={clsx('text-secondary no-underline hover:text-red-500 hover:underline', classNames)}>
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
