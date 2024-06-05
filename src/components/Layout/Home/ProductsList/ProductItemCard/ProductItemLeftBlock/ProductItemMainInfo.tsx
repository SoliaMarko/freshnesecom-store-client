import {ReactElement} from 'react';
import {Box, IconButton, Typography} from '@mui/material';
import {BasicRating} from '@/components/Custom/CustomRating/CustomRating';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ProductItemMainInfoProps {
  productData: TransformedProductType;
  isFavorite: boolean;
  handleClickFavorite: () => void;
}

const ProductItemMainInfo = ({productData, isFavorite, handleClickFavorite}: ProductItemMainInfoProps): ReactElement => {
  const {title, mainDescription, rating} = productData;

  return (
    <Box className="relative w-full">
      <Box className="flex flex-row justify-between">
        <Typography className="mb-4 text-left text-lg font-semibold sm:text-2xl">{title}</Typography>
        <IconButton onClick={handleClickFavorite} className="relative -right-2 -top-2 z-10 self-start sm:hidden">
          {isFavorite ? <FavoriteIcon className="text-4xl text-red-500" /> : <FavoriteBorderIcon className="text-4xl" />}
        </IconButton>
      </Box>
      <Typography className="max-w-full truncate text-left text-primary-200">{mainDescription}</Typography>
      <BasicRating defaultRatingValue={rating} />
    </Box>
  );
};

export default ProductItemMainInfo;
