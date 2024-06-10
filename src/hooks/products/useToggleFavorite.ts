import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {useAddToWishistMutation, useRemoveFromWishistMutation} from '@/store/services/userApi';
import {IRootState} from '@/types/IRootState.type';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

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
  const {authorized, wishlist} = useSelector((state: IRootState) => state.user);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isLikeDisplayed, setIsLikeDisplayed] = useState<boolean>(false);
  const [addToWishlist] = useAddToWishistMutation();
  const [removeFromWishlist] = useRemoveFromWishistMutation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsFavorite(wishlist?.includes(productID));
  }, [wishlist, productID]);

  const handleIsFavorite = (): void => {
    if (!authorized) {
      navigate(`/${commonRoutes.LOGIN}`);
      return;
    }

    if (isFavorite) removeFromWishlist({productID});
    else addToWishlist({productID});

    setIsFavorite((current) => !current);
    isHandledLikeDisplay && handleLikeDisplay();
  };

  const handleLikeDisplay = (): void => {
    setIsLikeDisplayed(true);
    setTimeout(() => setIsLikeDisplayed(false), 600);
  };

  return {isFavorite, isLikeDisplayed, handleIsFavorite};
};
