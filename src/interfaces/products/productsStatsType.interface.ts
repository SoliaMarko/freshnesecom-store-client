import {Category} from '@/enums/products/categories.enum';

export interface ProductsStatsType {
  minPrice: number;
  maxPrice: number;
  quantityByCategory: {category: Category; items: number}[];
}
