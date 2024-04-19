import {NavLink} from 'react-router-dom';

const StyledNavLink = ({children, link}: {children: string; link: string}): JSX.Element => {
  return (
    <NavLink to={link} className="text-secondary no-underline">
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
