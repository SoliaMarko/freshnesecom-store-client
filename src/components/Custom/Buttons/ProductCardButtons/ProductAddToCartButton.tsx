import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import PrimaryButton from '../PrimaryButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductAddToCartButton = (): ReactElement => {
  return (
    <PrimaryButton>
      <Box className="flex flex-row items-center justify-between gap-3">
        <ShoppingCartIcon />
        <Typography className="text-lg font-semibold">Add to cart</Typography>
      </Box>
    </PrimaryButton>
  );
};

export default ProductAddToCartButton;
