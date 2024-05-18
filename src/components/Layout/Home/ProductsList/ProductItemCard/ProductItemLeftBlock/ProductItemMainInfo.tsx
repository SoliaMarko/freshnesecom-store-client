import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import {BasicRating} from '@/components/Custom/CustomRating/CustomRating';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';

interface ProductItemMainInfoProps {
  productData: TransformedProductType;
}

const ProductItemMainInfo = ({productData}: ProductItemMainInfoProps): ReactElement => {
  const {title, mainDescription, rating} = productData;

  return (
    <Box>
      <Typography className="customH2" align="left">
        {title}
      </Typography>
      <Typography className="max-w-full truncate" align="left">
        {mainDescription}
      </Typography>
      <BasicRating defaultRatingValue={rating} />
    </Box>
  );
};

export default ProductItemMainInfo;
