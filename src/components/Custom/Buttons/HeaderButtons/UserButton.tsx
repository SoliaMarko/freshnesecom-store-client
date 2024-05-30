import {ReactElement} from 'react';
import CustomMenu from '../../CustomMenu/CustomMenu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {useSelector} from 'react-redux';
import {selectUser} from '@/store/slices/user.slice';
import {Box} from '@mui/material';
import LogOutButton from './LogOutButton';
import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import ProfileButton from './ProfileButton';

const UserButton = (): ReactElement => {
  const user = useSelector(selectUser);

  const userPopover = (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, margin: 0}}>
      {user.authorized ? (
        <>
          <ProfileButton />
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
    <CustomMenu header="user" options={userPopoverWithIDs}>
      <PersonOutlineIcon className="text-3xl text-primary" />
    </CustomMenu>
  );
};

export default UserButton;
