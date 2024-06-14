import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {SortBy} from '@/enums/sort/sortBy.enum';
import {Order} from '@/enums/sort/order.enum';

const getSearchParams = (searchParams: URLSearchParams): any => {
  return Object.fromEntries(
    Array.from(searchParams.entries()).map(([key, value]) => {
      if (value === 'null') {
        return [key, null];
      }

      if (key === 'brands') {
        const valuesArray = value.split(',');
        const transformedValue = valuesArray.map((value: string) => parseFloat(value));
        return [key, transformedValue];
      }

      return [key, isNaN(parseFloat(value)) ? value : parseFloat(value)];
    })
  );
};

export const initialFilterValues = {
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

const searchParams = getSearchParams(new URLSearchParams(window.location.search));

const initialState = {
  searchParamsFitlers: {...initialFilterValues, ...searchParams}
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilters(state) {
      const searchParams = getSearchParams(new URLSearchParams(window.location.search));
      state.searchParamsFitlers = {...state.searchParamsFitlers, ...searchParams};
    },

    resetFilters(state) {
      state.searchParamsFitlers = {...initialFilterValues};
    }
  }
});

export const selectFilter = (state: RootState) => state.filter;

export const {updateFilters, resetFilters} = filterSlice.actions;

export default filterSlice.reducer;
