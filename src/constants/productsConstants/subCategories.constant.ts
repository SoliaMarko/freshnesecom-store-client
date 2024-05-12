import {SubCategory} from '@/enums/products/subCategories.enum';
import {ProductInfoOption} from '@/interfaces/products/productsInfoOptions.interface';
import {getKeysFromEnum} from '@/utils/enumTransformators/getKeysFromEnum';
import {getValuesFromEnum} from '@/utils/enumTransformators/getValuesFromEnum';
import {getFormatedLabel} from '@/utils/stringFormaters/getFormatedLabel';

const subCategoryKeys = getKeysFromEnum(SubCategory);
const subCategoryValues = getValuesFromEnum(SubCategory);

export const subCategoryOptions: ProductInfoOption[] = subCategoryValues.map((subCategoryValue, index): ProductInfoOption => {
  return {value: subCategoryValue, label: getFormatedLabel(subCategoryKeys[index])};
});
