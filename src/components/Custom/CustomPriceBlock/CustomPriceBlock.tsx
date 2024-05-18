import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {Box, Typography} from '@mui/material';
import clsx from 'clsx';
import {ReactElement} from 'react';

interface CustomPriceBlockProps {
  productData: TransformedProductType;
  size?: 'small' | 'medium' | 'large';
}

const CustomPriceBlock = ({productData, size = 'medium'}: CustomPriceBlockProps): ReactElement => {
  const {initialPrice, priceAfterDiscount, discount} = productData;

  return (
    <Box className="flex flex-col items-start justify-center">
      <Typography className={clsx('m-0', `${size}Title`)} align="left">
        {priceAfterDiscount} USD
      </Typography>
      <Typography className={clsx('m-0 font-semibold text-primary-300 line-through', `${size}Content`)}>{!!discount && initialPrice}</Typography>
    </Box>
  );
};

export default CustomPriceBlock;
