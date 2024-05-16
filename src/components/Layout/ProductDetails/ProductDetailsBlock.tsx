import {Box} from '@mui/material';
import {ReactElement, useMemo} from 'react';
import {useParams} from 'react-router-dom';
import {useGetProductByIdQuery} from '@/store/services/productsApi';
import {getTransformedProductData} from '@/utils/productsHelpers/getTransformedProductData';
import ProductDetailsGalleryBlock from './ProductDetailsGalleryBlock/ProductDetailsGalleryBlock';
import ProductDetailsInfoBlock from './ProductDetailsInfoBlock/ProductDetailsInfoBlock';

const ProductDetailsBlock = (): ReactElement => {
  const productID = useParams();
  const {data: productData, isLoading} = useGetProductByIdQuery(productID);
  const transformedData = useMemo(() => {
    return productData && getTransformedProductData(productData);
  }, [productData]);

  if (isLoading) return <Box>Loading...</Box>;

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
