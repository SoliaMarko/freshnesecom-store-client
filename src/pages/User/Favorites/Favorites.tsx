import {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Box, Typography} from '@mui/material';
import ProductsList from '@/components/Layout/AllProducts/ProductsList/ProductsList';
import Error from '@/pages/Error/Error';
import ProductsFooter from '@/components/Layout/AllProducts/ProductsFooter/ProductsFooter';
import {useGetAllWishlistProductsQuery} from '@/store/services/userApi';
import {useProducts} from '@/hooks/products/useProducts';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {ProductsMetaData} from '@/utils/productsHelpers/ProductsMetaData';
import ProductsNotFound from '@/components/Layout/AllProducts/ProductsNotFound/ProductsNotFound';
import StyledNavLink from '@/components/Custom/Links/StyledNavLink';
import {productRoutes} from '@/constants/globalConstants/global.constant';
import debounce from 'lodash.debounce';
import {ScrollableElement} from '@/interfaces/global/scrollableElement.interface';

const Favorites = (): ReactNode => {
  const productListRef = useRef<ScrollableElement>(null);
  const {wishedProductIDs} = useSelector((state: IRootState) => state.wishlist);
  const {
    data: {currentPageData, dataWithMeta, currentPage},
    handlers: {handlePageChange},
    error
  } = useProducts({
    getProducts: useGetAllWishlistProductsQuery,
    scrollTo: productListRef,
    dependencies: useMemo(() => [wishedProductIDs], [wishedProductIDs])
  });
  const [wishlistProducts, setWishlistProducts] = useState<ProductEntity[]>(currentPageData);
  const [productsMeta, setProductsMeta] = useState(new ProductsMetaData(currentPage, wishedProductIDs.length));

  const debouncedFilter = useCallback(
    debounce(() => {
      if (dataWithMeta && wishedProductIDs) {
        const filteredData = dataWithMeta.data.filter((product) => wishedProductIDs.includes(product._id));
        setWishlistProducts(filteredData);
        setProductsMeta(new ProductsMetaData(currentPage, wishedProductIDs.length));
      }
    }, 500),
    [dataWithMeta, wishedProductIDs]
  );

  useEffect(() => {
    debouncedFilter();

    return () => {
      debouncedFilter.cancel();
    };
  }, [debouncedFilter]);

  useEffect(() => {
    setWishlistProducts(currentPageData);
  }, [currentPageData]);

  if (error) {
    return <Error />;
  }

  return (
    dataWithMeta && (
      <Box className="relative lg:mb-24">
        <Box ref={productListRef}>
          {wishlistProducts.length ? (
            <ProductsList currentPageData={wishlistProducts} />
          ) : (
            <ProductsNotFound>
              <Typography className="customH2">Your wishlist is empty.</Typography>
              <StyledNavLink to={`/${productRoutes.PRODUCTS}`} classNames="text-2xl">
                Go to All Products
              </StyledNavLink>
            </ProductsNotFound>
          )}
        </Box>
        <Box>
          <ProductsFooter productsMetadata={productsMeta} handlePageChange={handlePageChange} currentPage={currentPage} />
        </Box>
      </Box>
    )
  );
};

export default Favorites;
