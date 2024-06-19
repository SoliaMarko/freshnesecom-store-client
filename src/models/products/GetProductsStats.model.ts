import {Brand} from '@/enums/products/brands.enum';

export class GetProductsStatsModel {
  public minPrice?: number;
  public maxPrice?: number;
  public minRating?: number;
  public maxRating?: number;
  public brands?: Brand[];
}
