import {getCalculatedPriceAfterDiscount} from './getCalculatedPriceAfterDiscount';
import {getLabelByValue} from '../enumTransformators/getLabelByValue';
import {freshnessOptions} from '@/constants/productsConstants/freshness.constant';
import {producerCategoryOptions} from '@/constants/productsConstants/producerCategories.constant';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {TransformedProductType} from '@/interfaces/products/transformedProductType.interface';
import {categoryOptions} from '@/constants/productsConstants/categories.constant';
import {subCategoryOptions} from '@/constants/productsConstants/subCategories.constant';
import {quantityUnitOptions} from '@/constants/productsConstants/quantityUnits.constant';
import {getTransformedArrayWithIDs} from '../arrayFormaters/getTransformedArrayWithIDs';

export const getTransformedProductData = (product: ProductEntity): TransformedProductType => {
  const {
    _id: id,
    _rating: rating,
    price: initialPrice,
    images,
    category,
    subCategory,
    additionalDescriptions,
    discount,
    freshness,
    producer,
    quantityUnits
  } = product;
  const categoryLabel = getLabelByValue(categoryOptions, category);
  const subCategoryLabel = getLabelByValue(subCategoryOptions, subCategory);
  const freshnessLabel = getLabelByValue(freshnessOptions, freshness);
  const calculatedPriceAfterDiscount = discount ? getCalculatedPriceAfterDiscount(initialPrice, discount) : initialPrice;
  const producerCategoryLabel = producer ? getLabelByValue(producerCategoryOptions, producer.category) : '';
  const producerCategoryName = producer ? producer.name : '';
  const producerLabeled = {category: producerCategoryLabel, name: producerCategoryName};
  const quantityUnitsLabeled = quantityUnits.map((unit) => getLabelByValue(quantityUnitOptions, unit));
  const additionalDescriptionsWithIDs = getTransformedArrayWithIDs(additionalDescriptions);
  const imagesWithIDs = getTransformedArrayWithIDs(images);

  return {
    ...product,
    id,
    rating,
    initialPrice,
    images: imagesWithIDs,
    category: categoryLabel,
    subCategory: subCategoryLabel,
    additionalDescriptions: additionalDescriptionsWithIDs,
    freshness: freshnessLabel,
    priceAfterDiscount: calculatedPriceAfterDiscount,
    producer: producerLabeled,
    quantityUnits: quantityUnitsLabeled
  };
};
