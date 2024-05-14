import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {Box} from '@mui/material';
import {ReactElement, useState} from 'react';
import ProductDetailsMainImage from './ProductDetailsMainImage/ProductDetailsMainImage';
import ProductDeatailsAdditionalImages from './ProductDeatailsAdditionalImages/ProductDetailsAdditionalImages';
import CustomChip from '@/components/Custom/CustomChips/CustomChip';

interface ProductDetailsGalleryBlockProps {
  productData: TransformedProductType;
}

const ProductDetailsGalleryBlock = ({productData}: ProductDetailsGalleryBlockProps): ReactElement => {
  const {images, discount, freeShipping} = productData;
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);
  const mainImage = images[mainImageIndex];
  const additionalImages = [...images];
  additionalImages.splice(mainImageIndex, 1);

  const handleSetMainImageIndex = (imgURL: string): void => {
    const imgIndex = images.findIndex((img: string) => img === imgURL);
    setMainImageIndex(() => imgIndex);
  };

  return (
    <Box className="flex flex-1 flex-col gap-8">
      <Box>
        <Box className="mb-2 ml-8 flex flex-row gap-6">
          {discount && <CustomChip value={`-${discount}`} />}
          {freeShipping && <CustomChip value={'Free shipping'} />}
        </Box>
        <ProductDetailsMainImage imageURL={mainImage} />
      </Box>

      <ProductDeatailsAdditionalImages images={additionalImages} handleClick={handleSetMainImageIndex} />
    </Box>
  );
};

export default ProductDetailsGalleryBlock;
