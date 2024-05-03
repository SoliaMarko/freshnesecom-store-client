import {AUTH_TOKENS_STORAGE} from '@/constants/storageConstants/localStorage.constant';
import {AuthState} from '@/interfaces/store/authState.interface';

export const getRefreshToken = () => {
  const tokens = localStorage.getItem(AUTH_TOKENS_STORAGE);
  if (tokens) return JSON.parse(tokens).refreshToken;
};
export const updateLocalStorageTokens = (tokens: AuthState) => localStorage.setItem(AUTH_TOKENS_STORAGE, JSON.stringify(tokens));
