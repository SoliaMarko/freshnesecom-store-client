import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {useAddToWishistMutation, useRemoveFromWishistMutation} from '@/store/services/userApi';
import {IRootState} from '@/types/IRootState.type';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../api/apiHooks';
import {addToWishlist as addToWishlistLocally, removeFromWishlist as removeFromWishlistLocally} from '@/store/slices/wishlist.slice';

interface UseToggleFavoriteParams {
  productID: string;
  isHandledLikeDisplay?: boolean;
}

interface UseToggleFavoriteReturnValues {
  isFavorite: boolean;
  isLikeDisplayed: boolean;
  handleIsFavorite: () => void;
}

export const useToggleFavorite = ({productID, isHandledLikeDisplay}: UseToggleFavoriteParams): UseToggleFavoriteReturnValues => {
  const {authorized} = useSelector((state: IRootState) => state.user);
  const {wishedProductIDs} = useSelector((state: IRootState) => state.wishlist);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isLikeDisplayed, setIsLikeDisplayed] = useState<boolean>(false);
  const [addToWishlist] = useAddToWishistMutation();
  const [removeFromWishlist] = useRemoveFromWishistMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsFavorite(wishedProductIDs?.includes(productID));
  }, [wishedProductIDs, productID]);

  const handleRemoveFromWishlist = (): void => {
    removeFromWishlist({productID});
    dispatch(removeFromWishlistLocally(productID));
  };

  const handleAddToWishlist = (): void => {
    addToWishlist({productID});
    dispatch(addToWishlistLocally(productID));
  };

  const handleIsFavorite = (): void => {
    if (!authorized) {
      navigate(`/${commonRoutes.LOGIN}`);
      return;
    }

    if (isFavorite) {
      handleRemoveFromWishlist();
    } else {
      handleAddToWishlist();
    }

    setIsFavorite((current) => !current);
    isHandledLikeDisplay && handleLikeDisplay();
  };

  const handleLikeDisplay = (): void => {
    setIsLikeDisplayed(true);
    setTimeout(() => setIsLikeDisplayed(false), 600);
  };

  return {isFavorite, isLikeDisplayed, handleIsFavorite};
};
