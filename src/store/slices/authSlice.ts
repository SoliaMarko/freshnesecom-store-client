import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {AuthState} from '@/interfaces/store/authState.interface';

const initialState: AuthState = {
  name: null,
  token: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          name: action.payload.name,
          token: action.payload.token
        })
      );
      state.name = action.payload.name;
      state.token = action.payload.token;
    }
  }
});

export const selectAuth = (state: RootState): AuthState => state.auth;

export const {setUser} = authSlice.actions;

export default authSlice.reducer;
