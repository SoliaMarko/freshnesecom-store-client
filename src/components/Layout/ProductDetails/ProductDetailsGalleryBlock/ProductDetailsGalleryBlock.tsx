import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {Box} from '@mui/material';
import {ReactElement, useState} from 'react';
import ProductDetailsMainImage from './ProductDetailsMainImage/ProductDetailsMainImage';
import ProductDetailsAdditionalImages from './ProductDetailsAdditionalImages/ProductDetailsAdditionalImages';
import CustomChip from '@/components/Custom/CustomChips/CustomChip';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';

interface ProductDetailsGalleryBlockProps {
  productData: TransformedProductType;
}

const ProductDetailsGalleryBlock = ({productData}: ProductDetailsGalleryBlockProps): ReactElement => {
  const {images, discount, freeShipping} = productData;
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);
  const mainImage = images[mainImageIndex].value;
  const additionalImages = [...getTransformedArrayWithIDs(images)].map((image) => image.value);
  additionalImages.splice(mainImageIndex, 1);

  const handleSetMainImageIndex = (imgURL: string): void => {
    const imgIndex = images.findIndex((image) => {
      return image.value === imgURL;
    });
    setMainImageIndex(() => imgIndex);
  };

  return (
    <Box className="flex flex-1 flex-col gap-8">
      <Box>
        <Box className="mb-2 ml-8 flex flex-row gap-6">
          {discount ? <CustomChip value={`-${discount}%`} classNames="text-secondary bg-secondary-500" /> : <></>}
          {freeShipping && <CustomChip value={'Free shipping'} classNames="text-secondary bg-secondary-500" />}
        </Box>
        <ProductDetailsMainImage imageURL={mainImage} />
      </Box>

      <ProductDetailsAdditionalImages images={additionalImages} handleClick={handleSetMainImageIndex} />
    </Box>
  );
};

export default ProductDetailsGalleryBlock;
