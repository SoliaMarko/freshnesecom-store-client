import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {Box, Typography} from '@mui/material';
import clsx from 'clsx';
import {ReactElement} from 'react';

interface CustomPriceBlockProps {
  productData: TransformedProductType;
  titleClassNames?: string;
  contentClassNames?: string;
}

const CustomPriceBlock = ({productData, titleClassNames, contentClassNames}: CustomPriceBlockProps): ReactElement => {
  const {initialPrice, priceAfterDiscount, discount} = productData;

  return (
    <Box className="flex flex-col items-start justify-center">
      <Typography className={clsx('m-0 text-left text-secondary-200 sm:text-primary', titleClassNames)}>{priceAfterDiscount} USD</Typography>
      <Typography className={clsx('m-0 font-semibold text-primary-300 line-through', contentClassNames)}>{!!discount && initialPrice}</Typography>
    </Box>
  );
};

export default CustomPriceBlock;
