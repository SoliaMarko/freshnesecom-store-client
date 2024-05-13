import {Box} from '@mui/material';
import {ReactElement, useEffect} from 'react';
import ProductItemCard from './ProductItemCard/ProductItemCard';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';
import {useSearchParams} from 'react-router-dom';
import {generalAppInfo} from '@/constants/globalConstants/global.constant';
import {getTransformedCardsData} from '@/utils/productsHelpers/getTransformedCardsData';
import {useGetProductsQuery} from '@/store/services/productsApi';
import {setProducts} from '@/store/slices/products.slice';
import {useAppDispatch} from '@/hooks/apiHooks';

const ProductsList = (): ReactElement => {
  const {data} = useGetProductsQuery({page: generalAppInfo.pagination.INITIAL_PAGE, itemsPerPage: generalAppInfo.pagination.ITEMS_PER_PAGE});
  const dispatch = useAppDispatch();
  const [searchParams, _setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || generalAppInfo.pagination.INITIAL_PAGE;
  const productsData = useSelector((state: IRootState) => state.products);
  const dataForCurrentPage = productsData.find((data: {meta: {page: string | number}}) => data.meta.page === currentPage)?.data;
  const transformedData = getTransformedCardsData(dataForCurrentPage);

  useEffect(() => {
    if (data) {
      dispatch(setProducts([data]));
    }
  }, [data]);

  return (
    <Box className="flex w-3/4 flex-col justify-stretch gap-8">
      {transformedData &&
        transformedData.map((productData, index: number) => <ProductItemCard key={`${index}-${productData}`} productData={productData} />)}
    </Box>
  );
};

export default ProductsList;
