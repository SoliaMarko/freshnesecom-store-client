import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';

const StyledNavLink = ({children, to}: {children: string; to: string}): ReactElement => {
  return (
    <NavLink to={to} className="hover:text-red-500 text-secondary no-underline">
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
