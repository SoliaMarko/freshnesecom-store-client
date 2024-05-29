import {Box} from '@mui/material';
import {Fragment, ReactElement} from 'react';
import ProductDetailsAdditionalImageItem from '../ProductDetailsAdditionalImageItem/ProductDetailsAdditionalImageItem';
import {ItemWithIDType} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

interface ProductDetailsAdditionalImagesRowProps {
  images: ItemWithIDType<string>[];
  handleClick?: (imgURL: string) => void;
}

const ProductDetailsAdditionalImagesRow = ({images, handleClick}: ProductDetailsAdditionalImagesRowProps): ReactElement => {
  return (
    <Box className="flex flex-row gap-10">
      {images.map((image) => {
        const {id, value} = image;

        return (
          <Fragment key={id}>
            <ProductDetailsAdditionalImageItem imageURL={value} handleClick={handleClick} />
          </Fragment>
        );
      })}
    </Box>
  );
};

export default ProductDetailsAdditionalImagesRow;
