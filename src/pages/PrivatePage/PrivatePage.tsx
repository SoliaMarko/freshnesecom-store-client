import {ReactNode} from 'react';
import LoadingToRedirect from '@features/LoadingToRedirect/LoadingToRedirect';
import {useSelector} from 'react-redux';
import {selectUser} from '@/store/slices/user.slice';

interface PrivatePageProps {
  children: ReactNode;
}

const PrivatePage = ({children}: PrivatePageProps): ReactNode => {
  const user = useSelector(selectUser);

  return user.authorized ? children : <LoadingToRedirect />;
};

export default PrivatePage;
