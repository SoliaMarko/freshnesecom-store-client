import {Box} from '@mui/material';
import {ReactElement} from 'react';
import ProductItemCard from './ProductItemCard/ProductItemCard';
import {getTransformedProductsData} from '@/utils/productsHelpers/getTransformedProductsData';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';

interface ProductsListProps {
  currentPageData: ProductEntity[];
}

const ProductsList = ({currentPageData}: ProductsListProps): ReactElement => {
  const transformedData = getTransformedProductsData(currentPageData);

  return (
    <Box className="flex w-3/4 flex-col items-center justify-stretch gap-8">
      {transformedData && transformedData.map((productData, index) => <ProductItemCard key={`${index}-${productData}`} productData={productData} />)}
    </Box>
  );
};

export default ProductsList;
