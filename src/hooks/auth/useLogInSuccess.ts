import {useEffect} from 'react';
import {useAppDispatch} from '../api/apiHooks';
import {setAuthTokens} from '@/store/slices/auth.slice';
import {setUser} from '@/store/slices/user.slice';
import {userRoutes} from '@/constants/globalConstants/global.constant';
import {useNavigate} from 'react-router-dom';
import {LogInData} from '@/interfaces/store/logInData.interface';
import {LogInFormModel} from '@/models/auth/LogInForm.model';
import {UseFormReturn} from 'react-hook-form';
import {AUTH_TOKENS_STORAGE} from '@/constants/storageConstants/localStorage.constant';
import {UseToastProps, useToast} from '../global/useToast';
import {responseSuccess} from '@/constants/successConstants/success.constant';
import {setWishlist} from '@/store/slices/wishlist.slice';

interface UseLogInSuccessParams extends UseToastProps {
  isLoginSuccess: boolean;
  loginData?: LogInData;
  formMethods?: UseFormReturn<LogInFormModel, undefined>;
}

export const useLogInSuccess = ({isLoginSuccess, loginData, formMethods, toast, onHandleToast}: UseLogInSuccessParams): void => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {openToastSuccess} = useToast({toast, onHandleToast});

  const updateUserStore = (): void => {
    const userInfo = {
      accessToken: loginData?.accessToken || '',
      refreshToken: loginData?.refreshToken || ''
    };
    dispatch(setAuthTokens(userInfo));
    dispatch(setUser(loginData?.user));
    dispatch(setWishlist(loginData?.user.wishlist));
    localStorage.setItem(AUTH_TOKENS_STORAGE, JSON.stringify(userInfo));
  };

  useEffect(() => {
    if (isLoginSuccess) {
      updateUserStore();
      if (formMethods) formMethods.reset(new LogInFormModel());
      openToastSuccess(responseSuccess.LOGIN);
      navigate(`/${userRoutes.USER}`);
    }
  }, [isLoginSuccess]);
};
