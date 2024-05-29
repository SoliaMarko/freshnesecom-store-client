import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {Category} from '@/enums/products/categories.enum';

const initialState = {
  search: '',
  minPrice: null,
  maxPrice: null,
  minRating: null,
  maxRating: null,
  brands: [],
  category: Category.AllCategories
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
