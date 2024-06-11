import {generalAppInfo} from '@/constants/globalConstants/global.constant';

export class ProductsMetaData {
  constructor(page: number, itemsCount: number) {
    this.page = page;
    this.itemsPerPage = generalAppInfo.pagination.ITEMS_PER_PAGE;
    this.itemsCount = itemsCount;
    this.pagesCount = Math.ceil(this.itemsCount / this.itemsPerPage);
    this.hasPreviousPage = this.page > 0;
    this.hasNextPage = this.page < this.pagesCount - 1;
  }

  readonly page: number;
  readonly itemsPerPage: number;
  readonly itemsCount: number;
  readonly pagesCount: number;
  readonly hasPreviousPage: boolean;
  readonly hasNextPage: boolean;
}
