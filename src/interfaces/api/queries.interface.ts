import {ProductEntity} from '../products/productEntity.interface';
import {ProductsMetadataType} from '../products/productsMetadataType.interface';
import {ProductsStatsType} from '../products/productsStatsType.interface';

export interface MutationReturnType {
  url: string;
  method: string;
  data: string;
  headers: {
    'Content-type': string;
  };
}

export interface LogoutUserArgs {
  email: string;
}

export interface GetAllProductsReturnType {
  data: ProductEntity[];
  meta: ProductsMetadataType;
}

export interface GetProductsStatsReturnType {
  success: boolean;
  data: ProductsStatsType;
}
