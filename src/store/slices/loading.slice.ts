import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';

const initialState = {
  loading: false
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state) {
      return {
        ...state,
        loading: true
      };
    },
    resetLoading(state) {
      return {
        ...state,
        loading: false
      };
    }
  }
});

export const selectLoading = (state: RootState) => state.loading;

export const {setLoading, resetLoading} = loadingSlice.actions;

export default loadingSlice.reducer;
