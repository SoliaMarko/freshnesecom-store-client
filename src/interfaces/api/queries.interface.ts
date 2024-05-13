import {REQUEST_METHODS_TYPE} from '@/constants/apiConstnants/requestMehods.constant';
import {ProductEntity} from '../products/productEntity.interface';
import {ProductsMetadataType} from '../products/productsMetadataType.interface';

export interface MutationReturnType {
  url: string;
  method: string;
  data: string;
  headers: {
    'Content-type': string;
  };
}

export interface QueryReturnType {
  url: string;
  method: REQUEST_METHODS_TYPE;
}

export interface GetProductsReturnType {
  data: ProductEntity[];
  meta: ProductsMetadataType;
}

export interface LogoutUserArgs {
  email: string;
}
