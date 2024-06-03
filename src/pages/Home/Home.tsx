import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import StyledNavLink from '@/components/Custom/Links/StyledNavLink';
import {productRoutes} from '@/constants/globalConstants/global.constant';

const Home = (): ReactElement => {
  return (
    <Box className="my-24 flex flex-col gap-6 md:my-48 md:gap-12">
      <Typography className="customH1 text-center">Welcome to Freshnesecom!</Typography>
      <StyledNavLink to={`/${productRoutes.PRODUCTS}`} classNames="text-2xl">
        Start shopping now
      </StyledNavLink>
    </Box>
  );
};

export default Home;
