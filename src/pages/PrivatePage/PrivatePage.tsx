import {ReactNode} from 'react';
import LoadingToRedirect from '@/features/redirect/LoadingToRedirect';
import {selectUser} from '@/store/slices/user.slice';
import {useAppSelector} from '@/hooks/apiHooks';

interface PrivatePageProps {
  children: ReactNode;
}

const PrivatePage = ({children}: PrivatePageProps): ReactNode => {
  const user = useAppSelector(selectUser);

  return user.authorized ? children : <LoadingToRedirect />;
};

export default PrivatePage;
