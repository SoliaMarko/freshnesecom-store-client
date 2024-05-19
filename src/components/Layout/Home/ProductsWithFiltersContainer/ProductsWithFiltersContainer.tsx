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
import {ExtendedError} from '@/interfaces/error/extendedError.interface';

export type ActionType = 'switchPage' | 'showMore';

const ProductsWithFiltersContainer = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productListWrapper = useRef<ScrollableElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || generalAppInfo.pagination.INITIAL_PAGE);
  const [pageAction, setPageAction] = useState<ActionType>('switchPage');
  const [currentPageData, setCurrentPageData] = useState<ProductEntity[]>([]);
  const {
    data: dataWithMeta,
    error,
    isLoading
  } = useGetAllProductsQuery({
    page: currentPage
  });

  const scrollToProductListStart = (): void => {
    if (productListWrapper.current) productListWrapper.current.scrollIntoView({behavior: 'instant'});
  };

  const handlePageChange = (newPage: number, action: ActionType): void => {
    setSearchParams({page: newPage.toString()});
    setCurrentPage(newPage);
    setPageAction(() => action);
  };

  useEffect(() => {
    if (dataWithMeta && pageAction === 'switchPage') {
      setCurrentPageData(() => dataWithMeta.data);
      scrollToProductListStart();
    }

    if (dataWithMeta && pageAction === 'showMore') {
      setCurrentPageData((prev) => [...prev, ...dataWithMeta.data]);
    }
  }, [dataWithMeta]);

  if (error) {
    const extendedError = error as ExtendedError;
    const {status, data: message} = extendedError;
    const content = `status: ${status} error: ${message}`;
    return <Error content={content} />;
  }

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box>
      <Box className="flex flex-row justify-between gap-10 px-11 pb-11 pt-16" ref={productListWrapper}>
        <Filters />
        <ProductsList currentPageData={currentPageData} />
      </Box>
      {dataWithMeta && <ProductsFooter productsData={dataWithMeta} handlePageChange={handlePageChange} currentPage={currentPage} />}
    </Box>
  );
};

export default ProductsWithFiltersContainer;
