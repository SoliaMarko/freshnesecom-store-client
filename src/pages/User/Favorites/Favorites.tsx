import {ReactNode, useEffect, useRef, useState} from 'react';
import {Box} from '@mui/material';
import ProductsList from '@/components/Layout/Home/ProductsList/ProductsList';
import Error from '@/pages/Error/Error';
import ProductsFooter from '@/components/Layout/Home/ProductsFooter/ProductsFooter';
import {useGetAllWishlistProductsQuery} from '@/store/services/userApi';
import {useProducts} from '@/hooks/products/useProducts';
import {ScrollableElement} from '@/interfaces/global/scrollableElement.interface';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {ProductsMetaData} from '@/utils/productsHelpers/ProductsMetaData';

const Favorites = (): ReactNode => {
  const productListRef = useRef<ScrollableElement>(null);
  const {wishedProductIDs} = useSelector((state: IRootState) => state.wishlist);
  const {
    data: {currentPageData, dataWithMeta, currentPage},
    handlers: {handlePageChange},
    error
  } = useProducts({
    getProducts: useGetAllWishlistProductsQuery,
    scrollTo: productListRef
  });
  const [wishlistProducts, setWishlistProducts] = useState<ProductEntity[]>(currentPageData);
  const [productsMeta, setProductsMeta] = useState(new ProductsMetaData(currentPage, wishlistProducts.length));

  useEffect(() => {
    if (dataWithMeta && wishedProductIDs) {
      setTimeout((): void => {
        setWishlistProducts(dataWithMeta.data.filter((product) => wishedProductIDs.includes(product._id)));
        setProductsMeta(new ProductsMetaData(currentPage, wishedProductIDs.length));
      }, 600);
    }
  }, [dataWithMeta, wishedProductIDs]);

  if (error) {
    return <Error />;
  }

  return (
    dataWithMeta && (
      <Box className="relative">
        <Box className="relative flex w-full flex-row justify-center gap-4 pb-6 lg:gap-10 lg:pb-11" ref={productListRef}>
          <ProductsList currentPageData={wishlistProducts} />
        </Box>
        <Box>
          <ProductsFooter productsMetadata={productsMeta} handlePageChange={handlePageChange} currentPage={currentPage} />
        </Box>
      </Box>
    )
  );
};

export default Favorites;
