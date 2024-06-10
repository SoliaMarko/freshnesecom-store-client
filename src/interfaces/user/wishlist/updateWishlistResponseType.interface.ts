import {WishlistAction} from '@/enums/user/wishlistActions.enum';

export interface UpdateWishlistResponseType {
  success: boolean;
  action: WishlistAction;
  productID: string;
}
