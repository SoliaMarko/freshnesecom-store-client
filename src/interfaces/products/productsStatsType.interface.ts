import {Category} from '@/enums/products/categories.enum';

export interface QuantityByCategoryType {
  category: Category;
  items: number;
}

export interface ProductsStatsType {
  minPrice: number;
  maxPrice: number;
  quantityByCategory: QuantityByCategoryType[];
}
