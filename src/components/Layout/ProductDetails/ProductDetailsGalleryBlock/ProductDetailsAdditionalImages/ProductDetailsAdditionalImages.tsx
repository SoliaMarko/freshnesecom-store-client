import {Fragment, ReactElement} from 'react';
import {Box} from '@mui/material';
import {getArrayChunks} from '@/utils/arrayFormaters/getArrayChunks';
import ProductDetailsAdditionalImagesRow from './ProductDetailsAdditionalImagesRow/ProductDetailsAdditionalImagesRow';
import {ItemWithIDType, getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

interface ProductDetailsAdditionalImagesProps {
  images: ItemWithIDType<string>[];
  imagesInRow?: number;
  handleClick?: (imgURL: string) => void;
}

const ProductDetailsAdditionalImages = ({images, imagesInRow = 2, handleClick}: ProductDetailsAdditionalImagesProps): ReactElement => {
  const imagesChunks = getTransformedArrayWithIDs(getArrayChunks(images, imagesInRow));

  return (
    <Box>
      {imagesChunks.map((images) => {
        const {id, value} = images;

        return (
          <Fragment key={id}>
            <ProductDetailsAdditionalImagesRow images={value} handleClick={handleClick} />
          </Fragment>
        );
      })}
    </Box>
  );
};

export default ProductDetailsAdditionalImages;
