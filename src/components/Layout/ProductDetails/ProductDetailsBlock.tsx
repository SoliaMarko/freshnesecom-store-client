import {Box} from '@mui/material';
import {ReactElement} from 'react';
import {useParams} from 'react-router-dom';
import {useGetProductByIdQuery} from '@/store/services/productsApi';
import {getTransformedProductsData} from '@/utils/productsHelpers/getTransformedProductsData';
import ProductDetailsGalleryBlock from './ProductDetailsGalleryBlock/ProductDetailsGalleryBlock';
import ProductDetailsInfoBlock from './ProductDetailsInfoBlock/ProductDetailsInfoBlock';

const ProductDetailsBlock = (): ReactElement => {
  const productID = useParams();
  const {data: productData, isLoading} = useGetProductByIdQuery(productID);
  if (isLoading) return <Box>Loading...</Box>;
  const transformedData = getTransformedProductsData([productData])[0];

  return (
    <Box className="flex flex-row justify-center">
      <Box className="flex max-w-7xl flex-row justify-between gap-12">
        <ProductDetailsGalleryBlock productData={transformedData} />
        <ProductDetailsInfoBlock productData={transformedData} />
      </Box>
    </Box>
  );
};

export default ProductDetailsBlock;
