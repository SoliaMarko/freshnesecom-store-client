import {Box} from '@mui/material';
import {Fragment, ReactElement} from 'react';
import ProductDetailsAdditionalImageItem from '../ProductDetailsAdditionalImageItem/ProductDetailsAdditionalImageItem';
import {useId} from 'react-id-generator';

interface ProductDetailsAdditionalImagesRowProps {
  images: string[];
  handleClick?: (imgURL: string) => void;
}

const ProductDetailsAdditionalImagesRow = ({images, handleClick}: ProductDetailsAdditionalImagesRowProps): ReactElement => {
  return (
    <Box className="flex flex-row gap-10">
      {images.map((image: string): ReactElement => {
        const [keyID] = useId();
        return (
          <Fragment key={keyID}>
            <ProductDetailsAdditionalImageItem imageURL={image} handleClick={handleClick} />
          </Fragment>
        );
      })}
    </Box>
  );
};

export default ProductDetailsAdditionalImagesRow;
