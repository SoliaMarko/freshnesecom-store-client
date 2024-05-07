import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {authApi} from './services/authApi';
import authReducer from './slices/auth.slice';
import userReducer from './slices/user.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
