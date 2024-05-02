import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {useAppDispatch} from '@/hooks/apiHooks';
import {useLogoutUserMutation} from '@/store/services/authApi';
import {resetUser, selectUser} from '@/store/slices/user.slice';
import {Button} from '@mui/material';
import {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const LogOutButton = (): ReactElement => {
  const [logoutUser] = useLogoutUserMutation({});
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  const handleLogout = async (): Promise<void> => {
    if (!user.authorized) return;
    await logoutUser({email: user.email});
    dispatch(resetUser());
    localStorage.removeItem('authTokens');
    navigate(`${commonRoutes.ROOT}`);
  };

  return <Button onClick={handleLogout}>Log Out</Button>;
};

export default LogOutButton;
