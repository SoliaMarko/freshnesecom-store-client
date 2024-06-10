import {AUTH_TOKENS_STORAGE} from '@/constants/storageConstants/localStorage.constant';
import {getRefreshToken, updateLocalStorageTokens} from '@/utils/tokens.utils';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem(AUTH_TOKENS_STORAGE);
    if (user) {
      const parsedUser = JSON.parse(user);
      config.headers.Authorization = `Bearer ${parsedUser.accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(baseURL + '/auth/refresh', {refresh: getRefreshToken()});
        const {accessToken, refreshToken} = response.data;
        updateLocalStorageTokens({accessToken, refreshToken});
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return axios(originalRequest);
      } catch (error) {
        localStorage.removeItem(AUTH_TOKENS_STORAGE);

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
