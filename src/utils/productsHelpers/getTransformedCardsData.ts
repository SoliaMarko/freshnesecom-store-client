import {getCalculatedPriceAfterDiscount} from './getCalculatedPriceAfterDiscount';
import {getLabelByValue} from '../enumTransformators/getLabelByValue';
import {freshnessOptions} from '@/constants/productsConstants/freshness.constant';
import {producerCategoryOptions} from '@/constants/productsConstants/producerCategories.constant';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {CardProductType} from '@/interfaces/products/cardProductType.interface';

export const getTransformedCardsData = (data: ProductEntity[]): CardProductType[] => {
  const transformedData = data?.map((product: ProductEntity) => {
    const freshnessLabel = getLabelByValue(freshnessOptions, product.freshness);
    const producerCategoryLabel = product.producer ? getLabelByValue(producerCategoryOptions, product.producer.category) : '';
    const producerCategoryName = product.producer ? product.producer.name : '';

    return {
      id: product._id,
      title: product.title,
      mainDescription: product.mainDescription,
      image: product.images[0],
      rating: product._rating,
      initialPrice: product.price,
      discount: product?.discount,
      priceAfterDiscount: product?.discount ? getCalculatedPriceAfterDiscount(product.price, product.discount) : product.price,
      freshness: freshnessLabel,
      producer: {category: producerCategoryLabel, name: producerCategoryName},
      delivery: product.deliveryFrom,
      stock: product.inStockCount,
      freeShipping: product.freeShipping
    };
  });

  return transformedData;
};
