import {ReactElement} from 'react';
import {Box} from '@mui/material';

interface ProductDetailsAdditionalImageItemProps {
  imageURL: string;
  handleClick?: (imgURL: string) => void;
}

const ProductDetailsAdditionalImageItem = ({imageURL, handleClick}: ProductDetailsAdditionalImageItemProps): ReactElement => {
  const handleImageClick = (): void => {
    if (!handleClick) return;
    handleClick(imageURL);
  };

  return (
    <Box className="flex-1">
      <img src={imageURL} className="aspect-4/3 w-full cursor-pointer rounded-2xl object-cover" onClick={handleImageClick} />
    </Box>
  );
};

export default ProductDetailsAdditionalImageItem;
