import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './axiosBaseQuery';
import {generalAppInfo} from '@/constants/globalConstants/global.constant';
import {QueryReturnType} from '@/interfaces/api/queries.interface';
import {GetProductsModel} from '@/models/GetProducts.model';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query<QueryReturnType, GetProductsModel>({
      query: ({page = generalAppInfo.pagination.INITIAL_PAGE, itemsPerPage = generalAppInfo.pagination.ITEMS_PER_PAGE}: GetProductsModel) => {
        return {
          url: `/product?page=${page}&itemsPerPage=${itemsPerPage}`,
          method: 'GET'
        };
      }
    })
  })
});

export const {useGetProductsQuery} = productsApi;
