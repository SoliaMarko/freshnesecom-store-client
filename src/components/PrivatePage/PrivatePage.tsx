import {ReactNode} from 'react';
import {useSelector} from 'react-redux';
import LoadingToRedirect from '../LoadingToRedirect/LoadingToRedirect';
import {selectAuth} from '@/store/slices/authSlice';
import {PrivatePageProps} from '@/interfaces/props/PagesProps/privatePageProps.interface';

const PrivatePage = ({children}: PrivatePageProps): ReactNode => {
  const {token} = useSelector(selectAuth);

  return token ? children : <LoadingToRedirect />;
};

export default PrivatePage;
