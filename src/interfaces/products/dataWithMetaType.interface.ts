import {ProductEntity} from './productEntity.interface';
import {ProductsMetadataType} from './productsMetadataType.interface';

export interface DataWithMetaType {
  data: ProductEntity[];
  meta: ProductsMetadataType;
}
