import {createApi} from '@reduxjs/toolkit/query/react';
import {SignUpFormType} from '@/types/forms.type';
import {axiosBaseQuery} from './axiosBaseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body: SignUpFormType) => {
        return {
          url: '/auth/signup',
          method: 'POST',
          data: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          }
        };
      }
    })
  })
});

export const {useRegisterUserMutation} = authApi;
