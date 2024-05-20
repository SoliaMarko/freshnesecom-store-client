import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './axiosBaseQuery';
import {generalAppInfo} from '@/constants/globalConstants/global.constant';
import {GetProductsReturnType} from '@/interfaces/api/queries.interface';
import {GetProductsModel} from '@/models/GetProducts.model';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllProducts: builder.query<GetProductsReturnType, GetProductsModel>({
      query: ({
        page = generalAppInfo.pagination.INITIAL_PAGE,
        itemsPerPage = generalAppInfo.pagination.ITEMS_PER_PAGE,
        minPrice,
        maxPrice,
        minRating,
        maxRating,
        selectedCategory
      }: GetProductsModel) => {
        console.log(
          `/product?page=${page}&itemsPerPage=${itemsPerPage}&minPrice=${minPrice}&maxPrice=${maxPrice}&minRating=${minRating}&maxRating=${maxRating}&selectedCategory=${selectedCategory}`
        );
        return {
          url: `/product?page=${page}&itemsPerPage=${itemsPerPage}&minPrice=${minPrice}&maxPrice=${maxPrice}&minRating=${minRating}&maxRating=${maxRating}&selectedCategory=${selectedCategory}`,
          method: 'GET'
        };
      }
    }),
    // TODO: add types
    getProductsStats: builder.query({
      query: () => ({
        url: '/product/stats',
        method: 'GET'
      })
    }),
    getProductById: builder.query({
      query: ({id}) => ({
        url: `/product/${id}`,
        method: 'GET'
      })
    })
  })
});

export const {useGetAllProductsQuery, useGetProductsStatsQuery, useGetProductByIdQuery} = productsApi;
