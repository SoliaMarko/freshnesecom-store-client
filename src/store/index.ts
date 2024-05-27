import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {authApi} from './services/authApi';
import {productsApi} from './services/productsApi';
import authReducer from './slices/auth.slice';
import userReducer from './slices/user.slice';
import filterReducer from './slices/filters.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    filter: filterReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
