import {selectUser} from '@/store/slices/user.slice';
import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {useSelector} from 'react-redux';

const UserProfile = (): ReactElement => {
  const user = useSelector(selectUser);

  return <Box>{`👋 ${user.firstName}`}</Box>;
};

export default UserProfile;
