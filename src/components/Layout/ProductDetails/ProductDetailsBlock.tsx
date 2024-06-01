import {Box} from '@mui/material';
import {ReactElement, useContext, useEffect, useMemo} from 'react';
import {useParams} from 'react-router-dom';
import {useGetProductByIdQuery} from '@/store/services/productsApi';
import {getTransformedProductData} from '@/utils/productsHelpers/getTransformedProductData';
import ProductDetailsGalleryBlock from './ProductDetailsGalleryBlock/ProductDetailsGalleryBlock';
import ProductDetailsInfoBlock from './ProductDetailsInfoBlock/ProductDetailsInfoBlock';
import {resetLoading, setLoading} from '@/store/slices/loading.slice';
import {useAppDispatch} from '@/hooks/apiHooks';
import {BreadcrumbsContext} from '@/contexts/BreadcrumbsProvider';

const ProductDetailsBlock = (): ReactElement => {
  const productID = useParams();
  const {onAddBreadcrumb} = useContext(BreadcrumbsContext);
  const {data: productData, isLoading} = useGetProductByIdQuery(productID);
  const transformedData = useMemo(() => {
    return productData && getTransformedProductData(productData);
  }, [productData]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productData) {
      dispatch(resetLoading());
      const {_id, title} = productData;
      onAddBreadcrumb({link: `/products/${_id}`, name: title});
    }
  }, [productData]);

  useEffect(() => {
    if (isLoading) dispatch(setLoading());
  }, [isLoading]);

  return transformedData ? (
    <Box className="flex flex-row justify-center">
      <Box className="flex max-w-7xl flex-row justify-between gap-12">
        <ProductDetailsGalleryBlock productData={transformedData} />
        <ProductDetailsInfoBlock productData={transformedData} />
      </Box>
    </Box>
  ) : (
    <></>
  );
};

export default ProductDetailsBlock;
