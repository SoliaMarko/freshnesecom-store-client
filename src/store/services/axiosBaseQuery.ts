import {AxiosError, AxiosRequestConfig} from 'axios';
import axiosInstance from './axiosInstance';

export const axiosBaseQuery =
  () =>
  async ({url, method, data, params, headers}: AxiosRequestConfig) => {
    try {
      const result = await axiosInstance({
        url,
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
