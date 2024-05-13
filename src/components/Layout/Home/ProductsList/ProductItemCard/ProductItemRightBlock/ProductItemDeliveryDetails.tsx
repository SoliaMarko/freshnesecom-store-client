import {CardProductType} from '@/interfaces/products/cardProductType.interface';
import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';

interface ProductItemDeliveryDetailsProps {
  productData: CardProductType;
}

const ProductItemDeliveryDetails = ({productData}: ProductItemDeliveryDetailsProps): ReactElement => {
  const {freeShipping} = productData;

  return (
    <Box className="flex flex-col items-start justify-center">
      <Typography className="customH3 m-0 font-semibold text-primary-300">{freeShipping && 'Free Shipping'}</Typography>
      <Typography className="customH3 m-0 font-normal text-primary-300">Delivery from [X] day(s)</Typography>
    </Box>
  );
};

export default ProductItemDeliveryDetails;
