import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import StyledNavLink from '@/components/Custom/Links/StyledNavLink';
import ChatWithUsButton from '@/components/Custom/Buttons/HeaderButtons/ChatWithUsButton';

export const Navigation = (): ReactElement => {
  return (
    <nav className="flex flex-col items-center justify-between gap-4 py-2 md:h-12 md:flex-row md:items-center">
      <Box className="hidden items-center justify-between space-x-8 md:flex">
        <StyledNavLink to="#">Chat with us</StyledNavLink>
        <Typography>+420 336 775 664</Typography>
        <Typography>info@freshenesecom.com</Typography>
      </Box>
      <Box className="flex items-center justify-between space-x-9">
        <ChatWithUsButton classNames="md:hidden" />
        <StyledNavLink to="#">Blog</StyledNavLink>
        <StyledNavLink to="#">About Us</StyledNavLink>
        <StyledNavLink to="#">Careers</StyledNavLink>
      </Box>
    </nav>
  );
};

export default Navigation;
