import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import {CardProductType} from '@/interfaces/products/cardProductType.interface';

interface ProductItemPriceInfoProps {
  productData: CardProductType;
}

const ProductItemPriceInfo = ({productData}: ProductItemPriceInfoProps): ReactElement => {
  const {initialPrice, priceAfterDiscount, discount} = productData;

  return (
    <Box className="flex flex-col items-start justify-center">
      <Typography className="customH2 m-0" align="left">
        {priceAfterDiscount} USD
      </Typography>
      <Typography className="customH3 m-0 font-semibold text-primary-300 line-through">{!!discount && initialPrice}</Typography>
    </Box>
  );
};

export default ProductItemPriceInfo;
