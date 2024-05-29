import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {SortBy} from '@/enums/sort/sortBy.enum';
import {Order} from '@/enums/sort/order.enum';

const initialState = {
  search: '',
  minPrice: null,
  maxPrice: null,
  minRating: null,
  maxRating: null,
  category: null,
  brands: [],
  sortBy: SortBy.Recency,
  order: Order.DESC
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
