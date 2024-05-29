import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {AuthState} from '@/interfaces/store/authState.interface';

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null
  // redirect
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthTokens: (state, action: PayloadAction<AuthState>) => {
      return {
        ...state,
        ...action.payload
      };
    }
  }
});

export const selectAuth = (state: RootState): AuthState => state.auth;

export const {setAuthTokens} = authSlice.actions;

export default authSlice.reducer;
