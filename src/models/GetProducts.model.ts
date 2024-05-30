import {generalAppInfo} from '@/constants/globalConstants/global.constant';
import {Brand} from '@/enums/products/brands.enum';
import {Category} from '@/enums/products/categories.enum';
import {Order} from '@/enums/sort/order.enum';
import {SortBy} from '@/enums/sort/sortBy.enum';

export class GetProductsModel {
  public page?: number = generalAppInfo.pagination.INITIAL_PAGE;
  public itemsPerPage?: number = generalAppInfo.pagination.ITEMS_PER_PAGE;
  public minPrice?: number;
  public maxPrice?: number;
  public minRating?: number;
  public maxRating?: number;
  public category?: Category;
  public brands?: Brand[];
  public sortBy?: SortBy;
  public order?: Order;
}
