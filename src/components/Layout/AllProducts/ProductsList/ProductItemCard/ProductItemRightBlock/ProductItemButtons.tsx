import {ReactElement} from 'react';
import {Box} from '@mui/material';
import AddToWishListButton from '@/components/Custom/Buttons/ProductCardButtons/AddToWishListButton';
import ProductDetailsButton from '@/components/Custom/Buttons/ProductCardButtons/ProductDetailsButton';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import clsx from 'clsx';

interface ProductItemButtonsProps {
  productData: TransformedProductType;
  isFavorite: boolean;
  handleClickFavorite: () => void;
  classNames?: string;
}

const ProductItemButtons = ({productData, isFavorite, handleClickFavorite, classNames}: ProductItemButtonsProps): ReactElement => {
  const {id} = productData;

  return (
    <Box className={clsx('hidden flex-col items-center justify-between gap-3 sm:flex sm:items-end', classNames)}>
      <ProductDetailsButton id={id} classNames="w-28 sm:w-56 h-12" />
      <AddToWishListButton isFavorite={isFavorite} handleClickFavorite={handleClickFavorite} classNames="sm:flex hidden w-56 h-12" />
    </Box>
  );
};

export default ProductItemButtons;
