import {RefObject, useCallback, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {generalAppInfo} from '@/constants/globalConstants/global.constant';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {PaginationButtonAction} from '@/enums/global/paginationButtonAction.enum';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';
import {useAppDispatch} from '@/hooks/api/apiHooks';
import {resetLoading, setLoading} from '@/store/slices/loading.slice';
import {ScrollableElement} from '@/interfaces/global/scrollableElement.interface';
import {GetProductsModel} from '@/models/products/GetProducts.model';
import {ExtendedError} from '@/interfaces/error/extendedError.interface';
import {SerializedError} from '@reduxjs/toolkit';
import {DataWithMetaType} from '@/interfaces/products/dataWithMetaType.interface';
import {NewParams} from '@/components/Layout/AllProducts/ProductsWithSortAndFiltersContainer/ProductsWithSortAndFiltersContainer';
import {updateFilters} from '@/store/slices/filters.slice';

interface UseProductsParams {
  // TODO fix any
  getProducts: (params: GetProductsModel) => any;
  scrollTo?: RefObject<ScrollableElement>;
  dependencies?: any;
}

interface UseProductsReturnValues {
  data: {currentPageData: ProductEntity[]; dataWithMeta: DataWithMetaType; currentPage: number};
  handlers: {
    handleSearchParamsChange: (newParams: NewParams) => void;
    handlePageChange: (newPage: number, action?: PaginationButtonAction) => void;
  };
  error: ExtendedError | SerializedError;
}

export const useProducts = ({getProducts, scrollTo, dependencies}: UseProductsParams): UseProductsReturnValues => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || generalAppInfo.pagination.INITIAL_PAGE);
  const [pageAction, setPageAction] = useState<PaginationButtonAction>(PaginationButtonAction.SwitchPage);
  const [currentPageData, setCurrentPageData] = useState<ProductEntity[]>([]);
  const {searchParamsFitlers} = useSelector((state: IRootState) => state.filter);
  const dispatch = useAppDispatch();

  const {
    data: dataWithMeta,
    error,
    isLoading
  } = getProducts({
    page: currentPage,
    itemsPerPage: generalAppInfo.pagination.ITEMS_PER_PAGE,
    ...searchParamsFitlers
  });

  const scrollToProductListStart = (): void => {
    if (scrollTo?.current) scrollTo.current.scrollIntoView({behavior: 'smooth'});
  };

  const handleSearchParamsChange = useCallback(
    (newParams: NewParams): void => {
      setSearchParams({...searchParamsFitlers, ...newParams});
      setCurrentPage(Number(newParams?.page) || 0);
      setPageAction(() => PaginationButtonAction.SwitchPage);
    },
    [currentPage, dataWithMeta, searchParamsFitlers]
  );

  const handlePageChange = useCallback(
    (newPage: number, action?: PaginationButtonAction): void => {
      handleSearchParamsChange({page: newPage});
      setCurrentPage(newPage);
      setPageAction(() => action || PaginationButtonAction.SwitchPage);
    },
    [currentPage, handleSearchParamsChange]
  );

  useEffect(() => {
    dispatch(updateFilters());
  }, [searchParams]);

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

  const productsQuery = getProducts({page: currentPage, itemsPerPage: generalAppInfo.pagination.ITEMS_PER_PAGE, ...searchParamsFitlers});

  useEffect(() => {
    productsQuery.refetch();
  }, [dependencies]);

  useEffect(() => {
    if (isLoading) dispatch(setLoading());
  }, [isLoading]);

  const data = {currentPageData, dataWithMeta, currentPage};
  const handlers = {handleSearchParamsChange, handlePageChange};

  return {data, handlers, error};
};
