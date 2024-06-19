import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './axiosBaseQuery';
import {GetAllProductsReturnType, GetProductsStatsReturnType} from '@/interfaces/api/queries.interface';
import {GetProductsModel} from '@/models/products/GetProducts.model';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {GetProductByIdModel} from '@/models/products/GetProductById.model';
import {GetProductsStatsModel} from '@/models/products/GetProductsStats.model';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllProducts: builder.query<GetAllProductsReturnType, GetProductsModel>({
      query: (queryParams: GetProductsModel) => {
        const url = Object.keys(queryParams)
          .reduce((acc, key) => acc + `${key}=${queryParams[key as keyof GetProductsModel]}&`, '/product?')
          .slice(0, -1);

        return {
          url,
          method: 'GET'
        };
      }
    }),

    getGeneralProductsStats: builder.query<GetProductsStatsReturnType, void>({
      query: () => ({
        url: '/product/stats',
        method: 'GET'
      })
    }),

    getProductsStatsByFilters: builder.query<GetProductsStatsReturnType, GetProductsStatsModel>({
      query: (queryParams: GetProductsStatsModel) => {
        const url = Object.keys(queryParams)
          .reduce((acc, key) => acc + `${key}=${queryParams[key as keyof GetProductsStatsModel]}&`, '/product/stats?')
          .slice(0, -1);

        return {
          url,
          method: 'GET'
        };
      }
    }),

    getProductById: builder.query<ProductEntity, GetProductByIdModel>({
      query: ({id}) => ({
        url: `/product/${id}`,
        method: 'GET'
      })
    })
  })
});

export const {useGetAllProductsQuery, useGetGeneralProductsStatsQuery, useGetProductsStatsByFiltersQuery, useGetProductByIdQuery} = productsApi;
