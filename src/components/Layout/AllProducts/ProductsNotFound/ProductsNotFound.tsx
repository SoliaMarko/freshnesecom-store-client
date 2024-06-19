import {Box} from '@mui/material';
import {ReactElement, ReactNode} from 'react';
import ProductsNotFoundImage from '@assets/no-products-picture.jpg';

interface ProductsNotFoundProps {
  children: ReactNode;
}

const ProductsNotFound = ({children}: ProductsNotFoundProps): ReactElement => {
  return (
    <Box>
      <img src={ProductsNotFoundImage} alt="no-products-found-illustration" className="h-96 w-96" />
      <Box className="customH2">{children}</Box>
    </Box>
  );
};

export default ProductsNotFound;
