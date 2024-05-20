import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import {BasicRating} from '@/components/Custom/CustomRating/CustomRating';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';

interface ProductHeaderProps {
  productData: TransformedProductType;
}

const ProductHeader = ({productData}: ProductHeaderProps): ReactElement => {
  const {title, rating} = productData;

  return (
    <Box className="flex flex-col">
      <Typography className="customH1 mb-0" align="left">
        {title}
      </Typography>
      <Box className="flex flex-row items-center justify-start gap-2">
        <BasicRating defaultRatingValue={rating} />
        {/* <Typography className="text-primary-300">([x] customer review)</Typography> */}
      </Box>
    </Box>
  );
};

export default ProductHeader;
