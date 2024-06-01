import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../index';

const initialState = {
  confirmInfo: '',
  isOpen: false,
  isConfirmed: false,
  onConfirm: () => {
    console.info('confirmed');
  }
};

const confirmationSlice = createSlice({
  name: 'confirmation',
  initialState,
  reducers: {
    setConfirmation(state, action) {
      return {...state, ...action.payload};
    },
    resetConfirmation() {
      return initialState;
    }
  }
});

export const selectConfirmation = (state: RootState) => state.confirmation;

export const {setConfirmation, resetConfirmation} = confirmationSlice.actions;

export default confirmationSlice.reducer;
