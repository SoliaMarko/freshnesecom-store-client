import {generalAppInfo} from '@/constants/globalConstants/global.constant';

export class PaginationModel {
  public page?: number = generalAppInfo.pagination.INITIAL_PAGE;
  public itemsPerPage?: number = generalAppInfo.pagination.ITEMS_PER_PAGE;
}
