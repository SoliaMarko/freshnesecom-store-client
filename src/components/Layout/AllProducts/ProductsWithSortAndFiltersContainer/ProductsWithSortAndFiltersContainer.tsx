import {ReactNode, useRef} from 'react';
import {Box} from '@mui/material';
import Filters from '../Filters/Filters';
import ProductsList from '../ProductsList/ProductsList';
import ProductsFooter from '../ProductsFooter/ProductsFooter';
import {useGetAllProductsQuery} from '@/store/services/productsApi';
import Error from '@/pages/Error/Error';
import SortBlock from '../SortBlock/SortBlock';
import FilterButton from '@/components/Custom/Buttons/FilterButtons/FilterButton';
import {useProducts} from '@/hooks/products/useProducts';
import {ScrollableElement} from '@/interfaces/global/scrollableElement.interface';

export type NewParams = {
  [key: string]: unknown;
};

const ProductsWithSortAndFiltersContainer = (): ReactNode => {
  const productListRef = useRef<ScrollableElement>(null);
  const {
    data: {currentPageData, dataWithMeta, currentPage},
    handlers: {handleSearchParamsChange, handlePageChange},
    error
  } = useProducts({
    getProducts: useGetAllProductsQuery,
    scrollTo: productListRef
  });

  if (error) {
    return <Error />;
  }

  return (
    dataWithMeta && (
      <Box>
        <Box className="flex flex-row justify-start gap-2 sm:gap-4">
          <FilterButton classNames="xl:hidden" handleSearchParamsChange={handleSearchParamsChange} />
          <SortBlock handleSearchParamsChange={handleSearchParamsChange} />
        </Box>
        <Box className="relative flex flex-row justify-between gap-4 pb-6 pt-8 lg:gap-10 lg:pb-11 lg:pt-16 2xl:pt-12" ref={productListRef}>
          <Filters handleSearchParamsChange={handleSearchParamsChange} />
          <Box className="w-full xl:w-3/4">
            <ProductsList currentPageData={currentPageData} />
          </Box>
        </Box>
        <ProductsFooter productsMetadata={dataWithMeta.meta} handlePageChange={handlePageChange} currentPage={currentPage} />
      </Box>
    )
  );
};

export default ProductsWithSortAndFiltersContainer;
