import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {UserState} from '@/interfaces/store/userState.interface';

const initialState: UserState = {authorized: false, email: ''};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action) => {
      console.log({authorized: true, ...action.payload});
      return {
        authorized: true,
        ...action.payload
      };
    },
    resetUser: () => {
      console.log('resetted');
      return initialState;
    }
  }
});

export const selectUser = (state: RootState) => state.user;

export const {setUser, resetUser} = userSlice.actions;

export default userSlice.reducer;
