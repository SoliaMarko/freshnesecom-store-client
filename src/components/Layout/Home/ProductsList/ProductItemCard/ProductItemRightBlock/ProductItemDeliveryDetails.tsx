import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {Box, Typography} from '@mui/material';
import clsx from 'clsx';
import {ReactElement} from 'react';

interface ProductItemDeliveryDetailsProps {
  productData: TransformedProductType;
  classNames?: string;
}

const ProductItemDeliveryDetails = ({productData, classNames}: ProductItemDeliveryDetailsProps): ReactElement => {
  const {freeShipping} = productData;

  return (
    <Box className={clsx('flex flex-col items-start justify-center', classNames)}>
      <Typography className="m-0 text-left text-base font-semibold text-primary-300 sm:text-lg">{freeShipping && 'Free Shipping'}</Typography>
      <Typography className="m-0 text-left text-base font-normal text-primary-300 sm:text-lg">Delivery from [X] day(s)</Typography>
    </Box>
  );
};

export default ProductItemDeliveryDetails;
