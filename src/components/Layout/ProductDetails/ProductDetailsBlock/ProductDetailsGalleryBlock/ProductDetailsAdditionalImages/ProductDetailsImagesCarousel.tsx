import {ReactElement} from 'react';
import {ItemWithIDType, getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import CustomCarousel from '@/components/Custom/CustomCarousel/CustomCarousel';
import ProductDetailsAdditionalImageItem from './ProductDetailsAdditionalImageItem/ProductDetailsAdditionalImageItem';

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

  return <CustomCarousel cards={additionalImagesComponents} cardsPerPage={2} arrowsClassNames="text-2xl" selectOnClick />;
};

export default ProductDetailsImagesCarousel;
