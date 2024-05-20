import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';

const initialState = {
  search: '',
  minPrice: 200,
  maxPrice: null,
  minRating: null,
  maxRating: null,
  brands: [],
  categories: []
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters(state, action) {
      return {...state, ...action.payload};
    },
    resetFilters() {
      return initialState;
    }
  }
});

export const selectUser = (state: RootState) => state.filter;

export const {setFilters, resetFilters} = filterSlice.actions;

export default filterSlice.reducer;