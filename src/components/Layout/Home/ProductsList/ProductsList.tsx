import {Box} from '@mui/material';
import {ReactElement} from 'react';
import ProductItemCard from './ProductItemCard/ProductItemCard';
import {getTransformedProductData} from '@/utils/productsHelpers/getTransformedProductData';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';

interface ProductsListProps {
  currentPageData: ProductEntity[];
}

const ProductsList = ({currentPageData: products}: ProductsListProps): ReactElement => {
  const transformedData = products.map((product) => getTransformedProductData(product));

  return (
    <Box className="flex w-3/4 flex-col justify-stretch gap-8">
      {transformedData &&
        transformedData.map((productData) => {
          const {id} = productData;
          console.log('id', id, 'prod data', productData);

          return <ProductItemCard key={id} productData={productData} />;
        })}
    </Box>
  );
};

export default ProductsList;
