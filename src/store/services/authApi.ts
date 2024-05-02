import {createApi} from '@reduxjs/toolkit/query/react';
import {SignUpFormModel} from '@/models/SignUpForm.model';
import {LogInFormModel} from '@/models/LogInForm.model';
import {axiosBaseQuery} from './axiosBaseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body: SignUpFormModel) => {
        return {
          url: '/auth/signup',
          method: 'POST',
          data: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        };
      }
    }),

    loginUser: builder.mutation({
      query: (body: LogInFormModel) => {
        return {
          url: '/auth/login',
          method: 'POST',
          data: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        };
      }
    }),

    logoutUser: builder.mutation({
      query: (body: {email: string}) => {
        return {
          url: '/auth/logout',
          method: 'POST',
          data: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        };
      }
    }),

    getUser: builder.query({
      query: () => {
        return {
          url: '/user',
          method: 'GET'
        };
      }
    })
  })
});

export const {useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation, useGetUserQuery} = authApi;
