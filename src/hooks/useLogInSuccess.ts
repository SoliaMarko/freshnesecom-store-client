import {useEffect} from 'react';
import {useAppDispatch} from '@/hooks/apiHooks';
import {setAuthTokens} from '@/store/slices/auth.slice';
import {setUser} from '@/store/slices/user.slice';
import {userRoutes} from '@/constants/globalConstants/global.constant';
import {useNavigate} from 'react-router-dom';
import {LogInData} from '@/interfaces/store/loginData.interface';

interface UseLogInSuccessParams {
  isLoginSuccess: boolean;
  loginData: LogInData;
}

export const useLogInSuccess = ({isLoginSuccess, loginData}: UseLogInSuccessParams) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoginSuccess) {
      console.log('loginData', loginData);
      const userInfo = {
        accessToken: loginData.accessToken,
        refreshToken: loginData.refreshToken
      };
      dispatch(setAuthTokens(userInfo));
      dispatch(setUser(loginData.user));
      localStorage.setItem('authTokens', JSON.stringify(userInfo));
      alert('Authorization successful');
      navigate(`/${userRoutes.USER}/${userRoutes.PROFILE}`);
    }
  }, [isLoginSuccess]);
};
