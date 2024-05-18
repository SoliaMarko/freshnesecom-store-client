import {ReactElement} from 'react';
import CustomMenu from '../../CustomMenu/CustomMenu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {useSelector} from 'react-redux';
import {selectUser} from '@/store/slices/user.slice';
import {Box, Button} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {userRoutes} from '@/constants/globalConstants/global.constant';
import LogOutButton from './LogOutButton';
import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';
import {getTransformedArrayWithIDs} from '@/utils/productsHelpers/getTransformedArrayWithIDs';

const UserButton = (): ReactElement => {
  const user = useSelector(selectUser);

  const userPopover = (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
      {user.authorized ? (
        <>
          <NavLink to={`/${userRoutes.USER}/${userRoutes.PROFILE}`}>
            <Button>Profile</Button>
          </NavLink>
          <LogOutButton />
        </>
      ) : (
        <>
          <LogInButton />
          <SignUpButton />
        </>
      )}
    </Box>
  );

  const userPopoverWithIDs = getTransformedArrayWithIDs([userPopover]);

  return (
    <CustomMenu options={userPopoverWithIDs}>
      <PersonOutlineIcon className="text-3xl text-primary" />
    </CustomMenu>
  );
};

export default UserButton;
