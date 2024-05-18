import {Box} from '@mui/material';
import {ReactElement} from 'react';

interface ProductDetailsMainImageProps {
  imageURL: string;
}

const ProductDetailsMainImage = ({imageURL}: ProductDetailsMainImageProps): ReactElement => {
  return (
    <Box>
      <img src={imageURL} className="aspect-4/3 w-full rounded-2xl object-cover" />
    </Box>
  );
};

export default ProductDetailsMainImage;
