import {AuthState} from '@/interfaces/store/authState.interface';

export const getRefreshToken = () => JSON.parse(localStorage.getItem('user') || '').refreshToken;
export const updateLocalStorageTokens = (tokens: AuthState) => localStorage.setItem('authTokens', JSON.stringify(tokens));
