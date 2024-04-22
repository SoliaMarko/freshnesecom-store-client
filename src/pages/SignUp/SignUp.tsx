import {ReactElement} from 'react';
import SignUpForm from '@/components/Forms/SignUpForm/SignUpForm';
import {Box, Card, CardContent, Divider, Typography} from '@mui/material';
import StyledNavLink from '@/components/Links/StyledNavLink';
import {storeInfo, routes} from '@/constants/global.constant';

const SignUp = (): ReactElement => {
  return (
    <Box className="mx-auto my-12 flex justify-center">
      <Card>
        <CardContent>
          <Box className="flex min-w-72 flex-col gap-5">
            <Typography className="pb-5 font-display text-2xl font-semibold">Sign Up</Typography>
            <SignUpForm />
            <Typography>
              {`By creating an account, you agree to ${storeInfo.NAME}'s`}
              <StyledNavLink to={storeInfo.links.CONDITIONS_OF_USE}> Conditions of Use</StyledNavLink> and
              <StyledNavLink to={storeInfo.links.PRIVACY_NOTICE}> Privacy Notice</StyledNavLink>.
            </Typography>
            <Divider />
            <Typography>
              Already have an account? <StyledNavLink to={`/${routes.LOGIN}`}>Sign in</StyledNavLink>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;
