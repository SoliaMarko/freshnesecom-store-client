import {ReactElement} from 'react';
import {Box} from '@mui/material';
import {useSelector} from 'react-redux';
import {selectUser} from '@/store/slices/user.slice';

const UserProfile = (): ReactElement => {
  const user = useSelector(selectUser);

  return <Box>{`👋 ${user.firstName}`}</Box>;
};

export default UserProfile;
