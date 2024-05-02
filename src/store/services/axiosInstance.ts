import {getRefreshToken, updateLocalStorageTokens} from '@/utils/tokens.utils';
import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem('authTokens');
    if (user) {
      const parsedUser = JSON.parse(user);
      config.headers.Authorization = `Bearer ${parsedUser.accessToken}`;
    }

    return config;
  },
  (error) => {
    console.error(error);
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
        localStorage.removeItem('authTokens');
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
