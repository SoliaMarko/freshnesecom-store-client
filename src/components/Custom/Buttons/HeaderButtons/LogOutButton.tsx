import {ToastContext} from '@/contexts/ToastProvider';
import {productRoutes} from '@/constants/globalConstants/global.constant';
import {AUTH_TOKENS_STORAGE} from '@/constants/storageConstants/localStorage.constant';
import {responseSuccess} from '@/constants/successConstants/success.constant';
import {useAppDispatch} from '@/hooks/apiHooks';
import {useToast} from '@/hooks/useToast';
import {useLogoutUserMutation} from '@/store/services/authApi';
import {resetUser, selectUser} from '@/store/slices/user.slice';
import {Button, Typography} from '@mui/material';
import {ReactElement, useContext} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {confirmationQuestions} from '@/constants/confirmationQuestionsConstants/confirmationQuestions.constant';
import {setConfirmation} from '@/store/slices/confirmation.slice';

const LogOutButton = (): ReactElement => {
  const {toast, onHandleToast} = useContext(ToastContext);
  const [logoutUser] = useLogoutUserMutation({});
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const {openToastSuccess} = useToast({toast, onHandleToast});

  const handleLogout = async (): Promise<void> => {
    await logoutUser({email: user.email});
    openToastSuccess(responseSuccess.LOGOUT);
    dispatch(resetUser());
    localStorage.removeItem(AUTH_TOKENS_STORAGE);
    navigate(`/${productRoutes.PRODUCTS}`);
  };

  const handleConfirmLogout = (): void => {
    if (user.authorized) {
      dispatch(
        setConfirmation({
          confirmInfo: confirmationQuestions.logOut,
          isOpen: true,
          onConfirm: {handler: handleLogout}
        })
      );
    }
  };

  return (
    <Button onClick={handleConfirmLogout}>
      <Typography sx={{color: '#C7522D'}}>Log Out</Typography>
    </Button>
  );
};

export default LogOutButton;
