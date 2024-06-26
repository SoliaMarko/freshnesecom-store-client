import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {Box} from '@mui/material';
import {ReactElement, useState} from 'react';
import ProductDetailsMainImage from './ProductDetailsMainImage/ProductDetailsMainImage';
import CustomChip from '@/components/Custom/CustomChip/CustomChip';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import ProductDetailsImagesCarousel from './ProductDetailsAdditionalImages/ProductDetailsImagesCarousel';

interface ProductDetailsGalleryBlockProps {
  productData: TransformedProductType;
}

const ProductDetailsGalleryBlock = ({productData}: ProductDetailsGalleryBlockProps): ReactElement => {
  const {images, discount, freeShipping} = productData;
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);
  const mainImage = images[mainImageIndex].value;
  const allImages = [...getTransformedArrayWithIDs(images)].map((image) => image.value);

  const handleSetMainImageIndex = (imgURL: string): void => {
    const imgIndex = images.findIndex((image) => image.value === imgURL);
    setMainImageIndex(() => imgIndex);
  };

  return (
    <Box className="flex flex-1 flex-col gap-4 sm:gap-8">
      <Box className="flex flex-col gap-1">
        <Box className="ml-4 flex flex-row gap-2 sm:gap-6 md:ml-8">
          {discount ? <CustomChip value={`-${discount}%`} classNames="text-secondary bg-secondary-500" /> : <></>}
          {freeShipping && <CustomChip value={'Free shipping'} classNames="text-secondary bg-secondary-500" />}
        </Box>
        <ProductDetailsMainImage imageURL={mainImage} />
      </Box>
      <ProductDetailsImagesCarousel images={allImages} handleClick={handleSetMainImageIndex} />
    </Box>
  );
};

export default ProductDetailsGalleryBlock;
