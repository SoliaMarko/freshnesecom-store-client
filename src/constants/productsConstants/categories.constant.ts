import {Category} from '@/enums/products/categories.enum';
import {ProductInfoOption} from '@/interfaces/products/productsInfoOptions.interface';
import {getKeysFromEnum} from '@/utils/enumTransformators/getKeysFromEnum';
import {getValuesFromEnum} from '@/utils/enumTransformators/getValuesFromEnum';
import {getFormatedLabel} from '@/utils/stringFormaters/getFormatedLabel';

const categoryKeys = getKeysFromEnum(Category);
const categoryValues = getValuesFromEnum(Category);

export const categoryOptions: ProductInfoOption[] = categoryValues.map((categoryValue, index): ProductInfoOption => {
  return {value: categoryValue, label: getFormatedLabel(categoryKeys[index])};
});
