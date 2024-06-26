import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {authApi} from './services/authApi';
import {productsApi} from './services/productsApi';
import authReducer from './slices/auth.slice';
import userReducer from './slices/user.slice';
import wishlistReducer from './slices/wishlist.slice';
import filterReducer from './slices/filters.slice';
import loadingReducer from './slices/loading.slice';
import confirmationReducer from './slices/confirmation.slice';
import {userApi} from './services/userApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    wishlist: wishlistReducer,
    filter: filterReducer,
    loading: loadingReducer,
    confirmation: confirmationReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(authApi.middleware, userApi.middleware, productsApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
