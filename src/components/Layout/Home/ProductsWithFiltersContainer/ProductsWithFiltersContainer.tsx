import {ChangeEvent, ReactElement, useEffect, useRef, useState} from 'react';
import {Box} from '@mui/material';
import Filters from '../Filters/Filters';
import ProductsList from '../ProductsList/ProductsList';
import ProductsFooter from '../ProductsFooter/ProductsFooter';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';
import {useSearchParams} from 'react-router-dom';
import {generalAppInfo} from '@/constants/globalConstants/global.constant';
import {useGetAllProductsQuery} from '@/store/services/productsApi';
import {setProducts} from '@/store/slices/products.slice';
import {useAppDispatch} from '@/hooks/apiHooks';
import {ScrollableElement} from '@/interfaces/global/scrollableElement.interface';

const ProductsWithFiltersContainer = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const productListWrapper = useRef<ScrollableElement>(null);
  const productsData = useSelector((state: IRootState) => state.products);
  const [currentPage, setCurrentPage] = useState<string | number>(searchParams.get('page') || generalAppInfo.pagination.INITIAL_PAGE);
  const currentPageIndex = Number(currentPage) - 1;
  const {data: dataWithMeta} = useGetAllProductsQuery({
    page: currentPageIndex,
    itemsPerPage: generalAppInfo.pagination.ITEMS_PER_PAGE
  });
  const currentPageData = productsData.find((data: {meta: {page: string | number}}) => data.meta.page === currentPageIndex)?.data;

  const scrollToProductListStart = (): void => {
    if (productListWrapper.current) productListWrapper.current.scrollIntoView({behavior: 'instant'});
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, newPage: number): void => {
    const newPageIndex = newPage - 1;
    setSearchParams({page: newPageIndex.toString()});
    setCurrentPage(newPageIndex || generalAppInfo.pagination.INITIAL_PAGE);
    scrollToProductListStart();
  };

  useEffect(() => {
    if (dataWithMeta) {
      if (!currentPageData) dispatch(setProducts([dataWithMeta]));
    }
  }, [dataWithMeta]);

  return (
    <Box>
      <Box className="flex flex-row justify-between gap-10 px-11 pb-11 pt-16" ref={productListWrapper}>
        <Filters />
        {currentPageData ? <ProductsList currentPageData={currentPageData} /> : <Box>Loading...</Box>}
      </Box>
      {dataWithMeta && <ProductsFooter productsData={dataWithMeta} handlePageChange={handlePageChange} page={Number(currentPage) + 1} />}
    </Box>
  );
};

export default ProductsWithFiltersContainer;
