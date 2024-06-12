import {Brand} from '@/enums/products/brands.enum';
import {Category} from '@/enums/products/categories.enum';
import {Order} from '@/enums/sort/order.enum';
import {SortBy} from '@/enums/sort/sortBy.enum';
import {PaginationModel} from '../pagination/Pagination.model';

export class GetProductsModel extends PaginationModel {
  public minPrice?: number;
  public maxPrice?: number;
  public minRating?: number;
  public maxRating?: number;
  public category?: Category;
  public brands?: Brand[];
  public sortBy?: SortBy;
  public order?: Order;
}
