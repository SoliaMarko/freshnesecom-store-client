import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {WishlistState} from '@/interfaces/store/wishlistState.interface';

const initialState: WishlistState = {wishedProductIDs: []};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlist(state, action) {
      state.wishedProductIDs = action.payload;
    },

    addToWishlist(state, action) {
      state.wishedProductIDs?.push(action.payload);
    },

    removeFromWishlist(state, action) {
      const productIDIndex = state.wishedProductIDs?.indexOf(action.payload);
      state.wishedProductIDs.splice(productIDIndex, 1);
    }
  }
});

export const selectWishlist = (state: RootState) => state.wishlist;

export const {setWishlist, addToWishlist, removeFromWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;
