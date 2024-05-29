import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './axiosBaseQuery';
import {generalAppInfo} from '@/constants/globalConstants/global.constant';
import {GetAllProductsReturnType, GetProductsStatsReturnType} from '@/interfaces/api/queries.interface';
import {GetProductsModel} from '@/models/GetProducts.model';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {GetProductByIdModel} from '@/models/GetProductById.model';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllProducts: builder.query<GetAllProductsReturnType, GetProductsModel>({
      query: ({
        page = generalAppInfo.pagination.INITIAL_PAGE,
        itemsPerPage = generalAppInfo.pagination.ITEMS_PER_PAGE,
        minPrice,
        maxPrice,
        minRating,
        maxRating,
        category
      }) => {
        return {
          url: `/product?page=${page}&itemsPerPage=${itemsPerPage}&minPrice=${minPrice}&maxPrice=${maxPrice}&minRating=${minRating}&maxRating=${maxRating}&category=${category}`,
          method: 'GET'
        };
      }
    }),

    getProductsStats: builder.query<GetProductsStatsReturnType, void>({
      query: () => ({
        url: '/product/stats',
        method: 'GET'
      })
    }),

    getProductById: builder.query<ProductEntity, GetProductByIdModel>({
      query: ({id}) => ({
        url: `/product/${id}`,
        method: 'GET'
      })
    })
  })
});

export const {useGetAllProductsQuery, useGetProductsStatsQuery, useGetProductByIdQuery} = productsApi;
