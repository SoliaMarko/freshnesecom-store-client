import {ReactElement} from 'react';
import {Typography} from '@mui/material';
import SecondaryButton from '@/components/Custom/Buttons/SecondaryButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface AddToWishListButtonProps {
  isFavorite: boolean;
  handleClickFavorite: () => void;
  classNames?: string;
}

const AddToWishListButton = ({isFavorite, handleClickFavorite, classNames}: AddToWishListButtonProps): ReactElement => {
  return (
    <SecondaryButton onClickHandler={handleClickFavorite} classNames={classNames}>
      {isFavorite ? <FavoriteIcon className="text-red-500" /> : <FavoriteBorderIcon />}
      <Typography className="text-sm font-semibold sm:text-lg">{isFavorite ? 'Remove Wish' : 'Add To Wishlist'}</Typography>
    </SecondaryButton>
  );
};

export default AddToWishListButton;
