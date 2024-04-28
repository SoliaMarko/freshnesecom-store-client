import {ReactElement} from 'react';
import SignUpForm from '@/components/Forms/SignUpForm/SignUpForm';
import {Box, Divider, Typography} from '@mui/material';
import StyledNavLink from '@/components/Links/StyledNavLink';
import {storeInfo, commonRoutes} from '@/constants/globalConstants/global.constant';
import CustomCard from '@/components/CustomCard/CustomCard';

const SignUp = (): ReactElement => {
  return (
    <Box className="mx-auto my-12 flex justify-center">
      <CustomCard title="Sign Up">
        <>
          <SignUpForm />
          <Typography>
            {`By creating an account, you agree to ${storeInfo.NAME}'s`}
            <StyledNavLink to={storeInfo.links.CONDITIONS_OF_USE}> Conditions of Use</StyledNavLink> and
            <StyledNavLink to={storeInfo.links.PRIVACY_NOTICE}> Privacy Notice</StyledNavLink>.
          </Typography>
          <Divider />
          <Typography>
            Already have an account? <StyledNavLink to={`/${commonRoutes.LOGIN}`}>Sign in</StyledNavLink>
          </Typography>
        </>
      </CustomCard>
    </Box>
  );
};

export default SignUp;
