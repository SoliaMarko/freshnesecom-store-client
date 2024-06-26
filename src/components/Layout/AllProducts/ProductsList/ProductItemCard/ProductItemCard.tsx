import {ReactElement} from 'react';
import {Box} from '@mui/material';
import ProductItemMainInfo from './ProductItemLeftBlock/ProductItemMainInfo';
import ProductItemPriceInfo from './ProductItemRightBlock/ProductItemPriceInfo';
import ProductItemDeliveryDetails from './ProductItemRightBlock/ProductItemDeliveryDetails';
import ProductItemButtons from './ProductItemRightBlock/ProductItemButtons';
import ProductItemAdditionalInfoList from './ProductItemLeftBlock/ProductItemDetails/ProductItemDetails';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ProductDetailsButton from '@/components/Custom/Buttons/ProductCardButtons/ProductDetailsButton';
import {useToggleFavorite} from '@/hooks/products/useToggleFavorite';
import clsx from 'clsx';

interface ProductItemCardProps {
  productData: TransformedProductType;
}

const ProductItemCard = ({productData}: ProductItemCardProps): ReactElement => {
  const {id, title, images, inStockCount} = productData;
  const mainImage = images[0].value;
  const {isFavorite, isLikeDisplayed, handleIsFavorite} = useToggleFavorite({productID: id, isHandledLikeDisplay: true});
  const imageEffects = inStockCount || 'grayscale';

  const handleDoubleClick = (): void => {
    handleIsFavorite();
  };

  return (
    <Box
      className="relative flex w-full max-w-7xl flex-col rounded-xl border-2 border-solid border-primary-400 shadow-xl sm:flex-row"
      onDoubleClick={handleDoubleClick}
    >
      <Box className="relative flex min-h-80 sm:w-1/3">
        <img
          src={mainImage}
          alt={`${title}-illustration`}
          loading="lazy"
          className={clsx('absolute left-0 top-0 h-full w-full rounded-t-xl object-cover sm:rounded-l-xl sm:rounded-tr-none', imageEffects)}
        />
        {isLikeDisplayed ? (
          isFavorite ? (
            <FavoriteIcon className="absolute left-0 top-0 h-full w-full animate-ping text-red-500" />
          ) : (
            <FavoriteBorderIcon className="absolute left-0 top-0 h-full w-full animate-ping" />
          )
        ) : (
          ''
        )}
      </Box>
      <Box className="flex h-2/3 flex-col justify-between gap-1 p-3 sm:h-full sm:w-2/3 sm:flex-row sm:items-stretch sm:gap-2 sm:p-6">
        <Box className="flex w-full flex-col sm:w-1/2">
          <ProductItemMainInfo productData={productData} isFavorite={isFavorite} handleClickFavorite={handleIsFavorite} />
          <ProductItemAdditionalInfoList productData={productData} classNames="hidden sm:flex" />
        </Box>
        <Box className="flex w-full flex-col justify-between gap-3 sm:w-1/3">
          <Box className="order-3 flex flex-row items-center justify-between sm:order-1">
            <ProductItemPriceInfo productData={productData} />
            <ProductDetailsButton id={id} classNames="w-34 sm:hidden h-12" />
          </Box>
          <ProductItemDeliveryDetails productData={productData} classNames="order-2" />
          <ProductItemButtons
            productData={productData}
            isFavorite={isFavorite}
            isInStock={Boolean(inStockCount)}
            handleClickFavorite={handleIsFavorite}
            classNames="order-3"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItemCard;
