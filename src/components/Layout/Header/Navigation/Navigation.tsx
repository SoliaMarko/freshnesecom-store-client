import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import StyledNavLink from '@/components/Custom/Links/StyledNavLink';

export const Navigation = (): ReactElement => {
  return (
    <nav className="flex h-12 items-center justify-between">
      <Box className="flex justify-between space-x-8">
        <StyledNavLink to="#">Chat with us</StyledNavLink>
        <Typography>+420 336 775 664</Typography>
        <Typography>info@freshenesecom.com</Typography>
      </Box>
      <Box className="flex justify-between space-x-9">
        <StyledNavLink to="#">Blog</StyledNavLink>
        <StyledNavLink to="#">About Us</StyledNavLink>
        <StyledNavLink to="#">Careers</StyledNavLink>
      </Box>
    </nav>
  );
};

export default Navigation;
