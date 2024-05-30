import {ReactElement, useEffect, useRef, useState} from 'react';
import {Box} from '@mui/material';
import Filters from '../Filters/Filters';
import ProductsList from '../ProductsList/ProductsList';
import ProductsFooter from '../ProductsFooter/ProductsFooter';
import {useSearchParams} from 'react-router-dom';
import {generalAppInfo} from '@/constants/globalConstants/global.constant';
import {useGetAllProductsQuery} from '@/store/services/productsApi';
import {ScrollableElement} from '@/interfaces/global/scrollableElement.interface';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import Error from '@/pages/Error/Error';
import {PaginationButtonAction} from '@/enums/global/paginationButtonAction.enum';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';
import SortBlock from '../SortBlock';
import {useAppDispatch} from '@/hooks/apiHooks';
import {resetLoading, setLoading} from '@/store/slices/loading.slice';

export type NewParams = {
  [key: string]: string | string[] | number;
};

const ProductsWithSortAndFiltersContainer = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || generalAppInfo.pagination.INITIAL_PAGE);
  const [pageAction, setPageAction] = useState<PaginationButtonAction>(PaginationButtonAction.SwitchPage);
  const [currentPageData, setCurrentPageData] = useState<ProductEntity[]>([]);
  const productListRef = useRef<ScrollableElement>(null);
  const filters = useSelector((state: IRootState) => state.filter);
  const dispatch = useAppDispatch();

  const {
    data: dataWithMeta,
    error,
    isLoading
  } = useGetAllProductsQuery({
    page: currentPage,
    itemsPerPage: generalAppInfo.pagination.ITEMS_PER_PAGE,
    ...filters
  });

  const scrollToProductListStart = (): void => {
    if (productListRef.current) productListRef.current.scrollIntoView({behavior: 'smooth'});
  };

  const handlePageChange = (newPage: number, action: PaginationButtonAction): void => {
    setSearchParams({page: newPage, ...filters});
    setCurrentPage(newPage);
    setPageAction(() => action);
  };

  const handleSearchParamsChange = (newParams: NewParams): void => {
    setSearchParams({page: 0, ...filters, ...newParams});
    setCurrentPage(0);
    setPageAction(() => PaginationButtonAction.SwitchPage);
  };

  useEffect(() => {
    if (dataWithMeta && pageAction === PaginationButtonAction.SwitchPage) {
      setCurrentPageData(() => dataWithMeta.data);
      scrollToProductListStart();
      dispatch(resetLoading());
    }

    if (dataWithMeta && pageAction === PaginationButtonAction.ShowMore) {
      setCurrentPageData((prev) => [...prev, ...dataWithMeta.data]);
      dispatch(resetLoading());
    }
  }, [dataWithMeta]);

  if (error) {
    return <Error />;
  }

  useEffect(() => {
    if (isLoading) dispatch(setLoading());
    console.log('loading');
  }, [isLoading]);

  return dataWithMeta ? (
    <Box>
      <SortBlock handleSearchParamsChange={handleSearchParamsChange} />
      <Box className="flex flex-row justify-between gap-10 pb-11 pt-16" ref={productListRef}>
        <Filters handleSearchParamsChange={handleSearchParamsChange} />
        <ProductsList currentPageData={currentPageData} />
      </Box>
      {dataWithMeta && <ProductsFooter productsData={dataWithMeta} handlePageChange={handlePageChange} currentPage={currentPage} />}
    </Box>
  ) : (
    <></>
  );
};

export default ProductsWithSortAndFiltersContainer;
