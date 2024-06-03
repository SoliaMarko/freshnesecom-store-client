import {ReactElement, useEffect, useState} from 'react';
import {Box, useMediaQuery} from '@mui/material';
import RelatedProductsCarouselHeader from './RelatedProductsCarouselHeader/RelatedProductsCarouselHeader';
import CustomCarousel from '@/components/Custom/CustomCarousel/CustomCarousel';
import RelatedProductCard from './RelatedProductCard/RelatedProductCard';
import {Category} from '@/enums/products/categories.enum';
import {useAppDispatch} from '@/hooks/apiHooks';
import {useGetAllProductsQuery} from '@/store/services/productsApi';
import {generalAppInfo} from '@/constants/globalConstants/global.constant';
import Error from '@/pages/Error/Error';
import {resetLoading, setLoading} from '@/store/slices/loading.slice';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import {getTransformedProductData} from '@/utils/productsHelpers/getTransformedProductData';

interface RelatedProductsCarouselProps {
  category?: Category;
  currentProductID: string;
}

const RelatedProductsCarousel = ({category = Category.AllCategories, currentProductID}: RelatedProductsCarouselProps): ReactElement => {
  const [relatedProductsData, setRelatedProductsData] = useState<ProductEntity[]>([]);
  const dispatch = useAppDispatch();
  const transformedProductsData = relatedProductsData.map((productData) => getTransformedProductData(productData));
  const transformedProductsDataWithIDs = getTransformedArrayWithIDs(transformedProductsData);
  const {
    data: productsData,
    error,
    isLoading
  } = useGetAllProductsQuery({
    page: 0,
    itemsPerPage: generalAppInfo.MAX_RELATED_PRODUCTS_IN_CAROUSEL_COUNT,
    category: category
  });
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isSmallLaptop = useMediaQuery('(max-width: 1280px)');

  let itemsInCarousel;

  if (isMobile) {
    itemsInCarousel = 1;
  } else if (isTablet) {
    itemsInCarousel = 2;
  } else if (isSmallLaptop) {
    itemsInCarousel = 3;
  } else {
    itemsInCarousel = 4;
  }

  useEffect(() => {
    if (productsData) {
      setRelatedProductsData(() => productsData.data.filter((product) => product._id !== currentProductID));
      dispatch(resetLoading());
    }
  }, [productsData]);

  if (error) {
    return <Error />;
  }

  useEffect(() => {
    if (isLoading) dispatch(setLoading());
  }, [isLoading]);

  const relatedProductsComponents = transformedProductsDataWithIDs.map(({id, value: productData}) => (
    <RelatedProductCard key={id} productData={productData} />
  ));

  return (
    <Box className="flex flex-col gap-4 py-6 sm:px-4 md:gap-8 md:px-11 md:py-16">
      <RelatedProductsCarouselHeader />
      <CustomCarousel cards={relatedProductsComponents} cardsPerPage={itemsInCarousel} arrowsClassNames="text-3xl sm:text-5xl" />
    </Box>
  );
};

export default RelatedProductsCarousel;
