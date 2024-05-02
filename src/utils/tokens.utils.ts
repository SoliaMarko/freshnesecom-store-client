import {AuthState} from '@/interfaces/store/authState.interface';

export const getRefreshToken = () => {
  const tokens = localStorage.getItem('authTokens');
  if (tokens) return JSON.parse(tokens).refreshToken;
};
export const updateLocalStorageTokens = (tokens: AuthState) => localStorage.setItem('authTokens', JSON.stringify(tokens));
