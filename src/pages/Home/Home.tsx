import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import StyledNavLink from '@/components/Custom/Links/StyledNavLink';
import {productRoutes} from '@/constants/globalConstants/global.constant';

const Home = (): ReactElement => {
  return (
    <Box className="my-48 flex flex-col gap-12">
      <Typography className="customH1" align="center">
        Welcome to Freshnesecom!
      </Typography>
      <StyledNavLink to={`/${productRoutes.PRODUCTS}`} size="2xl">
        Start shopping now
      </StyledNavLink>
    </Box>
  );
};

export default Home;
