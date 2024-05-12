import {ReactElement} from 'react';
import {Box} from '@mui/material';
import AddToWishListButton from '@/components/Custom/Buttons/ProductCardButtons/AddToWishListButton';
import ProductDetailsButton from '@/components/Custom/Buttons/ProductCardButtons/ProductDetailsButton';
import {CardProductType} from '@/interfaces/products/cardProductType.interface';

interface ProductItemButtonsProps {
  productData: CardProductType;
}

const ProductItemButtons = ({productData}: ProductItemButtonsProps): ReactElement => {
  const {id} = productData;

  return (
    <Box className="flex flex-col items-end justify-between gap-3">
      <ProductDetailsButton id={id} />
      <AddToWishListButton />
    </Box>
  );
};

export default ProductItemButtons;
