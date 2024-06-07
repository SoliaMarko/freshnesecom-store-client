import {ReactElement, useEffect, useState} from 'react';
import {Box} from '@mui/material';
import ProductHeader from './ProductHeader/ProductHeader';
import ProductMainDescription from './ProductMainDescription/ProductMainDescription';
import ProductAdditionalDetails from './ProductAdditionalDetails/ProductAdditionalDetails';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import ProductPurchaseBlock from './ProductPurchaseBlock/ProductPurchaseBlock';
import AddToWishListButton from '@/components/Custom/Buttons/ProductCardButtons/AddToWishListButton';
import ProductTabs from './ProductTabs/ProductTabs';
import {getProductTabsData} from '@/utils/productsHelpers/getProductTabsData';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';
import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {useNavigate} from 'react-router-dom';
import {useAddToWishistMutation, useRemoveFromWishistMutation} from '@/store/services/userApi';

interface ProductDetailsInfoBlockProps {
  productData: TransformedProductType;
}

const ProductDetailsInfoBlock = ({productData}: ProductDetailsInfoBlockProps): ReactElement => {
  const {id} = productData;
  const productTabsData = getProductTabsData(productData);
  const {authorized, wishlist} = useSelector((state: IRootState) => state.user);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [addToWishlist] = useAddToWishistMutation();
  const [removeFromWishlist] = useRemoveFromWishistMutation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsFavorite(wishlist?.includes(id));
  }, [wishlist, id]);

  const handleIsFavorite = (): void => {
    if (!authorized) {
      navigate(`/${commonRoutes.LOGIN}`);
      return;
    }

    if (isFavorite) removeFromWishlist({productID: id});
    else addToWishlist({productID: id});

    setIsFavorite((current) => !current);
  };

  return (
    <Box className="flex flex-1 flex-col gap-8">
      <Box className="flex flex-1 flex-col gap-2 sm:gap-4 md:gap-6">
        <ProductHeader productData={productData} />
        <ProductMainDescription productData={productData} />
        <ProductAdditionalDetails productData={productData} />
        <ProductPurchaseBlock productData={productData} />
        <AddToWishListButton isFavorite={isFavorite} handleClickFavorite={handleIsFavorite} classNames="max-w-44" />
        <AddToWishListButton isFavorite={isFavorite} handleClickFavorite={handleIsFavorite} classNames="max-w-44" />
      </Box>
      <ProductTabs productTabsData={productTabsData} />
    </Box>
  );
};

export default ProductDetailsInfoBlock;
