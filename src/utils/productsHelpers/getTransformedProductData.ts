import {getCalculatedPriceAfterDiscount} from './getCalculatedPriceAfterDiscount';
import {getLabelByValue} from '../enumTransformators/getLabelByValue';
import {freshnessOptions} from '@/constants/productsConstants/freshness.constant';
import {producerCategoryOptions} from '@/constants/productsConstants/producerCategories.constant';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {categoryOptions} from '@/constants/productsConstants/categories.constant';
import {subCategoryOptions} from '@/constants/productsConstants/subCategories.constant';
import {quantityUnitOptions} from '@/constants/productsConstants/quantityUnits.constant';

export const getTransformedProductData = (product: ProductEntity): TransformedProductType => {
  const {_id: id, _rating: rating, price: initialPrice, category, subCategory, discount, freshness, producer, quantityUnits} = product;
  const categoryLabel = getLabelByValue(categoryOptions, category);
  const subCategoryLabel = getLabelByValue(subCategoryOptions, subCategory);
  const freshnessLabel = getLabelByValue(freshnessOptions, freshness);
  const calculatedPriceAfterDiscount = discount ? getCalculatedPriceAfterDiscount(initialPrice, discount) : initialPrice;
  const producerCategoryLabel = producer ? getLabelByValue(producerCategoryOptions, producer.category) : '';
  const producerCategoryName = producer ? producer.name : '';
  const producerLabeled = {category: producerCategoryLabel, name: producerCategoryName};
  const quantityUnitsLabeled = quantityUnits.map((unit) => getLabelByValue(quantityUnitOptions, unit));

  return {
    ...product,
    id,
    initialPrice,
    rating,
    category: categoryLabel,
    subCategory: subCategoryLabel,
    freshness: freshnessLabel,
    priceAfterDiscount: calculatedPriceAfterDiscount,
    producer: producerLabeled,
    quantityUnits: quantityUnitsLabeled
  };
};
