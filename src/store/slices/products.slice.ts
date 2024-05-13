import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';

const initialState = [{data: {}, meta: {}}];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      console.log('state', state);
      console.log('action', action);
      return [...state, ...action.payload];
    }
  }
});

export const selectProducts = (state: RootState) => state.products;

export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer;
