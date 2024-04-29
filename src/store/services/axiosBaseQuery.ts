import {AxiosError, AxiosRequestConfig} from 'axios';
import axiosInstance from './axiosInstance';

export const axiosBaseQuery =
  ({baseUrl} = {baseUrl: import.meta.env.VITE_API_BASE_URL}) =>
  async ({url, method, data, params, headers}: AxiosRequestConfig) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers
      });

      return {data: result.data};
    } catch (axiosError) {
      const error = axiosError as AxiosError;

      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message
        }
      };
    }
  };
