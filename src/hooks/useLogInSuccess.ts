import {useEffect} from 'react';
import {useAppDispatch} from '@/hooks/apiHooks';
import {setAuthTokens} from '@/store/slices/auth.slice';
import {setUser} from '@/store/slices/user.slice';
import {userRoutes} from '@/constants/globalConstants/global.constant';
import {useNavigate} from 'react-router-dom';
import {LogInData} from '@/interfaces/store/logInData.interface';
import {LogInFormModel} from '@/models/LogInForm.model';
import {UseFormReturn} from 'react-hook-form';
import {AUTH_TOKENS_STORAGE} from '@/constants/storageConstants/localStorage.constant';

interface UseLogInSuccessParams {
  isLoginSuccess: boolean;
  loginData: LogInData;
  formMethods?: UseFormReturn<LogInFormModel, undefined>;
}

export const useLogInSuccess = ({isLoginSuccess, loginData, formMethods}: UseLogInSuccessParams) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoginSuccess) {
      const userInfo = {
        accessToken: loginData.accessToken,
        refreshToken: loginData.refreshToken
      };
      dispatch(setAuthTokens(userInfo));
      dispatch(setUser(loginData.user));
      localStorage.setItem(AUTH_TOKENS_STORAGE, JSON.stringify(userInfo));
      if (formMethods) formMethods.reset(new LogInFormModel());
      alert('Authorization successful');
      navigate(`/${userRoutes.USER}/${userRoutes.PROFILE}`);
    }
  }, [isLoginSuccess]);
};
