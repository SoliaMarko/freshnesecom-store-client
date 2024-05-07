import {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {Box, Divider, Typography} from '@mui/material';
import SignUpForm from '@/components/Custom/Forms/SignUpForm/SignUpForm';
import StyledNavLink from '@/components/Custom/Links/StyledNavLink';
import {storeInfo, commonRoutes} from '@/constants/globalConstants/global.constant';
import CustomCard from '@/components/Custom/CustomCard/CustomCard';
import {selectUser} from '@/store/slices/user.slice';

const SignUp = (): ReactElement => {
  const user = useSelector(selectUser);

  return (
    <Box className="mx-auto my-12 flex justify-center">
      {user.authorized ? (
        <Typography>You are already logged in</Typography>
      ) : (
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
      )}
    </Box>
  );
};

export default SignUp;
