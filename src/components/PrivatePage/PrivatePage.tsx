import {ReactNode} from 'react';
import LoadingToRedirect from '../LoadingToRedirect/LoadingToRedirect';
import {PrivatePageProps} from '@/interfaces/props/PagesProps/privatePageProps.interface';
import {selectUser} from '@/store/slices/user.slice';
import {useAppSelector} from '@/hooks/apiHooks';

const PrivatePage = ({children}: PrivatePageProps): ReactNode => {
  const user = useAppSelector(selectUser);

  return user.authorized ? children : <LoadingToRedirect />;
};

export default PrivatePage;
