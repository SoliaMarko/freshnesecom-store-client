import {ReactElement, useState} from 'react';
import {Typography} from '@mui/material';
import SecondaryButton from '@/components/Custom/Buttons/SecondaryButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AddToWishListButton = (): ReactElement => {
  const [isFavorite, setIsFavorite] = useState<boolean>(true);
  const handleIsFavorite = () => {
    setIsFavorite((current) => !current);
  };

  return (
    <SecondaryButton onClickHandler={handleIsFavorite}>
      {isFavorite ? <FavoriteIcon className="text-tangerineShade" /> : <FavoriteBorderIcon />}
      <Typography className="text-lg font-semibold">{isFavorite ? 'Remove From Wishes' : 'Add To Wishlist'}</Typography>
    </SecondaryButton>
  );
};

export default AddToWishListButton;
