import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';
import {SortBy} from '@/enums/sort/sortBy.enum';
import {Order} from '@/enums/sort/order.enum';
import {Category} from '@/enums/products/categories.enum';

const getSearchParams = (searchParams: URLSearchParams): any => {
  return Object.fromEntries(
    Array.from(searchParams.entries()).map(([key, value]) => {
      if (key === 'brands') {
        const valuesArray = value.split(',');
        const transformedArray = valuesArray.map((value: string) => parseFloat(value));
        const transformedValue = transformedArray[0] ? transformedArray : transformedArray[0];
        return [key, transformedValue];
      }

      return [key, isNaN(parseFloat(value)) ? value : parseFloat(value)];
    })
  );
};

export const initialFilterValues = {
  search: '',
  minPrice: '',
  maxPrice: '',
  minRating: '',
  maxRating: '',
  category: Category.AllCategories,
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
      state.searchParamsFitlers = {...initialFilterValues, ...searchParams};
    },

    resetFilters(state) {
      state.searchParamsFitlers = {...initialFilterValues};
    }
  }
});

export const selectFilter = (state: RootState) => state.filter;

export const {updateFilters, resetFilters} = filterSlice.actions;

export default filterSlice.reducer;
