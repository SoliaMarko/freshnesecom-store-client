import {selectAuth} from '@/store/slices/authSlice';
import {ReactNode} from 'react';
import {useSelector} from 'react-redux';
import LoadingToRedirect from '../LoadingToRedirect/LoadingToRedirect';

const PrivateRoute = ({children}: {children: ReactNode}): ReactNode => {
  const {token} = useSelector(selectAuth);

  return token ? children : <LoadingToRedirect />;
};

export default PrivateRoute;
