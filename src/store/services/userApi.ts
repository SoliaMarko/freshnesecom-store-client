import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './axiosBaseQuery';
import {WishlistAction} from '@/enums/user/wishlistActions.enum';
import {UpdateWishlistResponseType} from '@/interfaces/user/wishlist/updateWishlistResponseType.interface';
import {UpdateWishlistArgsType} from '@/interfaces/user/wishlist/updateWishlistArgsType.interface';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    addToWishist: builder.mutation<UpdateWishlistResponseType, UpdateWishlistArgsType>({
      query: (data: UpdateWishlistArgsType) => {
        const {productID} = data;

        return {
          url: '/user/wishlist',
          method: 'PATCH',
          data: JSON.stringify({action: WishlistAction.add, productID}),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        };
      }
    }),

    removeFromWishist: builder.mutation<UpdateWishlistResponseType, UpdateWishlistArgsType>({
      query: (data: UpdateWishlistArgsType) => {
        const {productID} = data;

        return {
          url: '/user/wishlist',
          method: 'PATCH',
          data: JSON.stringify({action: WishlistAction.remove, productID}),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        };
      }
    })
  })
});

export const {useAddToWishistMutation, useRemoveFromWishistMutation} = userApi;
