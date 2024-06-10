import {ReactNode, useRef} from 'react';
import {Box} from '@mui/material';
import ProductsList from '@/components/Layout/Home/ProductsList/ProductsList';
import Error from '@/pages/Error/Error';
import ProductsFooter from '@/components/Layout/Home/ProductsFooter/ProductsFooter';
import {useGetAllWishlistProductsQuery} from '@/store/services/userApi';
import {useProducts} from '@/hooks/products/useProducts';
import {ScrollableElement} from '@/interfaces/global/scrollableElement.interface';

const Favorites = (): ReactNode => {
  const productListRef = useRef<ScrollableElement>(null);
  const {
    data: {currentPageData, dataWithMeta, currentPage},
    handlers: {handlePageChange},
    error
  } = useProducts({
    getProducts: useGetAllWishlistProductsQuery,
    scrollTo: productListRef
  });

  if (error) {
    return <Error />;
  }

  return (
    dataWithMeta && (
      <Box className="relative">
        <Box className="relative flex w-full flex-row justify-center gap-4 pb-6 lg:gap-10 lg:pb-11" ref={productListRef}>
          <ProductsList currentPageData={currentPageData} />
        </Box>
        <Box>
          <ProductsFooter productsData={dataWithMeta} handlePageChange={handlePageChange} currentPage={currentPage} />
        </Box>
      </Box>
    )
  );
};

export default Favorites;
