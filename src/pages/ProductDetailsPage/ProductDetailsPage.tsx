import {ReactElement, useContext, useEffect, useMemo} from 'react';
import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';
import {useGetProductByIdQuery} from '@/store/services/productsApi';
import {getTransformedProductData} from '@/utils/productsHelpers/getTransformedProductData';
import {resetLoading, setLoading} from '@/store/slices/loading.slice';
import {useAppDispatch} from '@/hooks/apiHooks';
import {BreadcrumbsContext} from '@/contexts/BreadcrumbsProvider';
import ProductDetailsBlock from '@/components/Layout/ProductDetails/ProductDetailsBlock/ProductDetailsBlock';
import RelatedProductsCarousel from '@/components/Layout/ProductDetails/RelatedProductsCarousel/RelatedProductsCarousel';
import {Category} from '@/enums/products/categories.enum';

const ProductDetailsPage = (): ReactElement => {
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
    <Box className="flex flex-col">
      <ProductDetailsBlock productData={transformedData} />
      <RelatedProductsCarousel category={productData?.category as Category} currentProductID={productData?._id as string} />
    </Box>
  ) : (
    <></>
  );
};

export default ProductDetailsPage;
