import {Box} from '@mui/material';
import {ReactElement} from 'react';
import ProductItemCard from './ProductItemCard/ProductItemCard';
import {getTransformedProductsData} from '@/utils/productsHelpers/getTransformedProductsData';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {useId} from 'react-id-generator';

interface ProductsListProps {
  currentPageData: ProductEntity[];
}

const ProductsList = ({currentPageData}: ProductsListProps): ReactElement => {
  const transformedData = getTransformedProductsData(currentPageData);

  return (
    <Box className="flex w-3/4 flex-col justify-stretch gap-8">
      {transformedData &&
        transformedData.map((productData) => {
          const [keyID] = useId();

          return <ProductItemCard key={keyID} productData={productData} />;
        })}
    </Box>
  );
};

export default ProductsList;
