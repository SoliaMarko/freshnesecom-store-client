import {ReactNode} from 'react';
import LoadingToRedirect from '../LoadingToRedirect/LoadingToRedirect';
import {PrivatePageProps} from '@/interfaces/props/PagesProps/privatePageProps.interface';
import {useSelector} from 'react-redux';
import {selectUser} from '@/store/slices/user.slice';

const PrivatePage = ({children}: PrivatePageProps): ReactNode => {
  const user = useSelector(selectUser);

  return user.authorized ? children : <LoadingToRedirect />;
};

export default PrivatePage;
