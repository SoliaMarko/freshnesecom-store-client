import {ReactElement} from 'react';
import {Box, Divider, Typography} from '@mui/material';
import StyledNavLink from '@/components/Links/StyledNavLink';
import {storeInfo, commonRoutes} from '@/constants/globalConstants/global.constant';
import CustomCard from '@/components/CustomCard/CustomCard';
import LogInForm from '@/components/Forms/LogInForm/LogInForm';

const LogIn = (): ReactElement => {
  return (
    <Box className="mx-auto my-12 flex justify-center">
      <CustomCard title="Log In">
        <>
          <LogInForm />
          <Divider />
          <Typography>
            {`New to ${storeInfo.NAME}?`} <StyledNavLink to={`/${commonRoutes.SIGNUP}`}>{`Create your ${storeInfo.NAME} account`}</StyledNavLink>
          </Typography>
        </>
      </CustomCard>
    </Box>
  );
};

export default LogIn;
