import {Box, Typography} from '@mui/material';
import StyledNavLink from '../Links/StyledNavLink';

export const Navigation = (): JSX.Element => {
  return (
    <nav className="flex h-12 items-center justify-between">
      <Box className="flex justify-between space-x-8">
        <StyledNavLink link="#">Chat with us</StyledNavLink>
        <Typography>+420 336 775 664</Typography>
        <Typography>info@freshenesecom.com</Typography>
      </Box>
      <Box className="flex justify-between space-x-9">
        <StyledNavLink link="#">Blog</StyledNavLink>
        <StyledNavLink link="#">About Us</StyledNavLink>
        <StyledNavLink link="#">Careers</StyledNavLink>
      </Box>
    </nav>
  );
};

export default Navigation;
