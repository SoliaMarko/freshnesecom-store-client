import {Box, Divider, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <NavLink to="#">Chat with us</NavLink>
          <Typography>+420 336 775 664</Typography>
          <Typography>info@freshenesecom.com</Typography>
        </Box>
        <Box>
          <NavLink to="#">Blog</NavLink>
          <NavLink to="#">About Us</NavLink>
          <NavLink to="#">Careers</NavLink>
        </Box>
        <Divider />
      </Box>
    </header>
  );
};

export default Header;
