import {ReactElement} from 'react';
import {Typography} from '@mui/material';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';

interface ProductMainDescriptionProps {
  productData: TransformedProductType;
}

const ProductMainDescription = ({productData}: ProductMainDescriptionProps): ReactElement => {
  const {mainDescription} = productData;

  return (
    <Typography className="customH3 font-normal" align="left">
      {mainDescription}
    </Typography>
  );
};

export default ProductMainDescription;
