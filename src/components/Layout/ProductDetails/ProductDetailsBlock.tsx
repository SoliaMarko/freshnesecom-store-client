import {Box} from '@mui/material';
import {ReactElement, useMemo} from 'react';
import {useParams} from 'react-router-dom';
import {useGetProductByIdQuery} from '@/store/services/productsApi';
import {getTransformedProductsData} from '@/utils/productsHelpers/getTransformedProductsData';
import ProductDetailsGalleryBlock from './ProductDetailsGalleryBlock/ProductDetailsGalleryBlock';
import ProductDetailsInfoBlock from './ProductDetailsInfoBlock/ProductDetailsInfoBlock';

const ProductDetailsBlock = (): ReactElement => {
  const productID = useParams();
  const {data: productData, isLoading} = useGetProductByIdQuery(productID);
  const transformedData = useMemo(() => {
    return productData && getTransformedProductsData([productData])[0];
  }, [productData]);

  if (isLoading) return <Box>Loading...</Box>;

  return (
    <Box className="flex flex-row justify-between gap-8">
      <ProductDetailsGalleryBlock productData={transformedData} />
      <ProductDetailsInfoBlock productData={transformedData} />
    </Box>
  );
};

export default ProductDetailsBlock;
