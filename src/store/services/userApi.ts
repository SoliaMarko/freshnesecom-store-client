import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './axiosBaseQuery';
import {UpdateWishlistResponseType} from '@/interfaces/user/wishlist/updateWishlistResponseType.interface';
import {UpdateWishlistArgsType} from '@/interfaces/user/wishlist/updateWishlistArgsType.interface';
import {GetAllProductsReturnType} from '@/interfaces/api/queries.interface';
import {GetWishlistProductsModel} from '@/models/products/GetWishlistProducts.model';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    addToWishist: builder.mutation<UpdateWishlistResponseType, UpdateWishlistArgsType>({
      query: (data: UpdateWishlistArgsType) => {
        const {productID} = data;

        return {
          url: '/user/wishlist/add',
          method: 'PATCH',
          data: JSON.stringify({productIDs: [productID]})
        };
      }
    }),

    removeFromWishist: builder.mutation<UpdateWishlistResponseType, UpdateWishlistArgsType>({
      query: (data: UpdateWishlistArgsType) => {
        const {productID} = data;

        return {
          url: '/user/wishlist/remove',
          method: 'PATCH',
          data: JSON.stringify({productIDs: [productID]})
        };
      }
    }),

    getAllWishlistProducts: builder.query<GetAllProductsReturnType, GetWishlistProductsModel>({
      query: (queryParams: GetWishlistProductsModel) => {
        const url = Object.keys(queryParams)
          .reduce((acc, key) => acc + `${key}=${queryParams[key as keyof GetWishlistProductsModel]}&`, '/user/wishlist?')
          .slice(0, -1);

        return {
          url,
          method: 'GET'
        };
      }
    })
  })
});

export const {useAddToWishistMutation, useRemoveFromWishistMutation, useGetAllWishlistProductsQuery} = userApi;
