import {useAppSelector} from '@/hooks/apiHooks';
import {selectAuth} from '@/store/slices/authSlice';
import {ReactElement} from 'react';

const UserProfile = (): ReactElement => {
  const {name} = useAppSelector(selectAuth);

  return <div>{`👋 ${name}`}</div>;
};

export default UserProfile;
