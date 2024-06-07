import {ReactElement} from 'react';
import {ItemWithIDType, getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import CustomCarousel from '@/components/Custom/CustomCarousel/CustomCarousel';
import ProductDetailsAdditionalImageItem from './ProductDetailsAdditionalImageItem/ProductDetailsAdditionalImageItem';
import {generalAppInfo} from '@/constants/globalConstants/global.constant';

interface ProductDetailsImagesCarouselProps {
  images: ItemWithIDType<string>[];
  imagesInRow?: number;
  handleClick?: (imgURL: string) => void;
}

const ProductDetailsImagesCarousel = ({images, handleClick}: ProductDetailsImagesCarouselProps): ReactElement => {
  const imagesWithIDs = getTransformedArrayWithIDs(images);

  const additionalImagesComponents = imagesWithIDs.map(({value}, index) => (
    <ProductDetailsAdditionalImageItem key={index} imageURL={value.value} handleClick={handleClick} />
  ));

  return (
    <CustomCarousel
      cards={additionalImagesComponents}
      cardsPerPage={generalAppInfo.ADDITIONAL_IMAGES_IN_CAROUSEL_PER_ROW}
      arrowsClassNames="text-2xl"
      selectOnClick
    />
  );
};

export default ProductDetailsImagesCarousel;
