import {ToastContext} from '@/contexts/ToastProvider';
import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {AUTH_TOKENS_STORAGE} from '@/constants/storageConstants/localStorage.constant';
import {responseSuccess} from '@/constants/successConstants/success.constant';
import {useAppDispatch} from '@/hooks/apiHooks';
import {useToast} from '@/hooks/useToast';
import {useLogoutUserMutation} from '@/store/services/authApi';
import {resetUser, selectUser} from '@/store/slices/user.slice';
import {Button} from '@mui/material';
import {ReactElement, useContext} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const LogOutButton = (): ReactElement => {
  const {toast, onHandleToast} = useContext(ToastContext);
  const [logoutUser] = useLogoutUserMutation({});
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const {openToastSuccess} = useToast({toast, onHandleToast});

  const handleLogout = async (): Promise<void> => {
    if (!user.authorized) return;
    await logoutUser({email: user.email});
    openToastSuccess(responseSuccess.LOGOUT);
    dispatch(resetUser());
    localStorage.removeItem(AUTH_TOKENS_STORAGE);
    navigate(`${commonRoutes.ROOT}`);
  };

  return <Button onClick={handleLogout}>Log Out</Button>;
};

export default LogOutButton;
