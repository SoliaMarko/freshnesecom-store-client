import {configureStore} from '@reduxjs/toolkit';
import {authApi} from './services/authApi';
import authReducer from './slices/authSlice';
import {setupListeners} from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
