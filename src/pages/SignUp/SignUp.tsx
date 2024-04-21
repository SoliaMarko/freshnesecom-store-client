import {ReactElement} from 'react';
import SignUpForm from '@/components/Forms/SignUpForm/SignUpForm';
import {Box, Card, CardContent, Divider, Typography} from '@mui/material';
import StyledNavLink from '@/components/Links/StyledNavLink';
import {routes} from '@/constants/global.constant';

const SignUp = (): ReactElement => {
  return (
    <Box className="m-auto flex h-full justify-center">
      <Card>
        <CardContent>
          <Box style={{display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '280px'}}>
            <Typography className="pb-5 font-display text-2xl font-semibold">Sign Up</Typography>
            <SignUpForm />
            <Typography>
              By creating an account, you agree to Freshenesecom's
              <StyledNavLink to={`${routes.ROOT}/${routes.LOGIN}`}>Conditions of Use</StyledNavLink> and{' '}
              <StyledNavLink to="#">Privacy Notice</StyledNavLink>.
            </Typography>
            <Divider />
            <Typography>
              Already have an account? <StyledNavLink to="#">Sign in</StyledNavLink>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUp;
