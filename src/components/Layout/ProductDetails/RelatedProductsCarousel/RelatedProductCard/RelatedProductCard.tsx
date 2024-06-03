import ProductDetailsButton from '@/components/Custom/Buttons/ProductCardButtons/ProductDetailsButton';
import CustomChip from '@/components/Custom/CustomChip/CustomChip';
import CustomPriceBlock from '@/components/Custom/CustomPriceBlock/CustomPriceBlock';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';

interface RelatedProductCardProps {
  productData: TransformedProductType;
}

const RelatedProductCard = ({productData}: RelatedProductCardProps): ReactElement => {
  const {id, title, mainDescription, images, discount} = productData;
  const mainImage = images[0].value;

  return (
    <Box className="flex flex-col gap-4 p-2">
      <Box className="relative">
        {discount ? <CustomChip value={`-${discount}%`} classNames="text-secondary bg-secondary-500 absolute top-3 left-3" /> : <></>}
        <img src={mainImage} alt={`${title}-illustration`} loading="lazy" className="left-0 top-0 aspect-4/3 w-full rounded-xl object-cover" />
      </Box>
      <Box className="flex flex-col items-start gap-1">
        <Typography className="customH3 m-0 max-w-full truncate text-left sm:text-xl">{title}</Typography>
        <Typography className="max-w-full truncate text-left">{mainDescription}</Typography>
      </Box>
      <Box className="flex flex-row items-center justify-between">
        <Box className="flex flex-col items-start gap-1">
          <CustomPriceBlock
            productData={productData}
            titleClassNames="font-semibold text-lg sm:text-2xl sm:mb-1"
            contentClassNames="font-semibold text-base sm:text-xl"
          />
        </Box>
        <ProductDetailsButton id={id} title="Buy now" />
      </Box>
    </Box>
  );
};

export default RelatedProductCard;
