import {Box} from '@mui/material';
import {Fragment, ReactElement} from 'react';
import ProductDetailsAdditionalImageItem from '../ProductDetailsAdditionalImageItem/ProductDetailsAdditionalImageItem';
import {WithID} from '@/utils/productsHelpers/getTransformedArrayWithIDs';

interface ProductDetailsAdditionalImagesRowProps {
  images: WithID<string>[];
  handleClick?: (imgURL: string) => void;
}

const ProductDetailsAdditionalImagesRow = ({images, handleClick}: ProductDetailsAdditionalImagesRowProps): ReactElement => {
  return (
    <Box className="flex flex-row gap-10">
      {images.map((image) => {
        const {id, values} = image;

        return (
          <Fragment key={id}>
            <ProductDetailsAdditionalImageItem imageURL={values} handleClick={handleClick} />
          </Fragment>
        );
      })}
    </Box>
  );
};

export default ProductDetailsAdditionalImagesRow;
