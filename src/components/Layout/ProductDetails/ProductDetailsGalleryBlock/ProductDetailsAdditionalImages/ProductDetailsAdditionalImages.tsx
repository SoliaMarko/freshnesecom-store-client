import {Fragment, ReactElement} from 'react';
import {Box} from '@mui/material';
import {getArrayChunks} from '@/utils/arrayFormaters/getArrayChunks';
import ProductDetailsAdditionalImagesRow from './ProductDetailsAdditionalImagesRow/ProductDetailsAdditionalImagesRow';
import {useId} from 'react-id-generator';

interface ProductDetailsAdditionalImagesProps {
  images: string[];
  imagesInRow?: number;
  handleClick?: (imgURL: string) => void;
}

const ProductDetailsAdditionalImages = ({images, imagesInRow = 2, handleClick}: ProductDetailsAdditionalImagesProps): ReactElement => {
  const imagesChunks = getArrayChunks(images, imagesInRow);

  return (
    <Box>
      {imagesChunks.map((images: string[]) => {
        const [keyID] = useId();

        return (
          <Fragment key={keyID}>
            <ProductDetailsAdditionalImagesRow images={images} handleClick={handleClick} />
          </Fragment>
        );
      })}
    </Box>
  );
};

export default ProductDetailsAdditionalImages;
