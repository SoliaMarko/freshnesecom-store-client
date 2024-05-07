import {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {Box, Divider, Typography} from '@mui/material';
import StyledNavLink from '@/components/Custom/Links/StyledNavLink';
import {storeInfo, commonRoutes} from '@/constants/globalConstants/global.constant';
import CustomCard from '@/components/Custom/CustomCard/CustomCard';
import LogInForm from '@/components/Custom/Forms/LogInForm/LogInForm';
import {selectUser} from '@/store/slices/user.slice';

const LogIn = (): ReactElement => {
  const user = useSelector(selectUser);

  return (
    <Box className="mx-auto my-12 flex justify-center">
      {user.authorized ? (
        <Typography>You are already logged in</Typography>
      ) : (
        <CustomCard title="Log In">
          <>
            <LogInForm />
            <Divider />
            <Typography>
              {`New to ${storeInfo.NAME}?`} <StyledNavLink to={`/${commonRoutes.SIGNUP}`}>{`Create your ${storeInfo.NAME} account`}</StyledNavLink>
            </Typography>
          </>
        </CustomCard>
      )}
    </Box>
  );
};

export default LogIn;
