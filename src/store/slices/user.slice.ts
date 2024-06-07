import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {UserState} from '@/interfaces/store/userState.interface';

const initialState: UserState = {authorized: false, email: ''};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action) => {
      return {
        authorized: true,
        ...action.payload
      };
    },

    resetUser: () => {
      return initialState;
    },

    updateWishlist(state, action) {
      state.wishlist = action.payload;
    }
  }
});

export const selectUser = (state: RootState) => state.user;

export const {setUser, resetUser, updateWishlist} = userSlice.actions;

export default userSlice.reducer;
