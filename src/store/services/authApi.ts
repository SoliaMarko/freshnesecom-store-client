import {createApi} from '@reduxjs/toolkit/query/react';
import {SignUpFormModel} from '@/models/auth/SignUpForm.model';
import {LogInFormModel} from '@/models/auth/LogInForm.model';
import {axiosBaseQuery} from './axiosBaseQuery';
import {LogoutUserArgs, MutationReturnType} from '@/interfaces/api/queries.interface';
import {GetUserModel} from '@/models/user/GetUser.model';
import {LogInData} from '@/interfaces/store/logInData.interface';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    registerUser: builder.mutation<MutationReturnType, SignUpFormModel>({
      query: (body: SignUpFormModel) => {
        return {
          url: '/auth/signup',
          method: 'POST',
          data: JSON.stringify(body)
        };
      }
    }),

    loginUser: builder.mutation<LogInData, LogInFormModel>({
      query: (body: LogInFormModel) => {
        return {
          url: '/auth/login',
          method: 'POST',
          data: JSON.stringify(body)
        };
      }
    }),

    logoutUser: builder.mutation<MutationReturnType, LogoutUserArgs>({
      query: (body: LogoutUserArgs) => {
        return {
          url: '/auth/logout',
          method: 'POST',
          data: JSON.stringify(body)
        };
      }
    }),

    getUser: builder.query<GetUserModel, void>({
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
