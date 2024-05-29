import {ProducerCategory} from '@/enums/products/producerCategories.enum';
import {ProductInfoOption} from '@/interfaces/products/productsInfoOptions.interface';
import {getKeysFromEnum} from '@/utils/enumTransformators/getKeysFromEnum';
import {getValuesFromEnum} from '@/utils/enumTransformators/getValuesFromEnum';
import {getFormatedLabel} from '@/utils/stringFormaters/getFormatedLabel';

const producerCategoryKeys = getKeysFromEnum(ProducerCategory);
const producerCategoryValues = getValuesFromEnum(ProducerCategory);

export const producerCategoryOptions: ProductInfoOption[] = producerCategoryValues.map((producerCategoryValue, index): ProductInfoOption => {
  return {value: producerCategoryValue, label: getFormatedLabel(producerCategoryKeys[index])};
});
