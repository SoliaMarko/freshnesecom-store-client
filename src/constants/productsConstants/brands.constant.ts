import {Brand} from '@/enums/products/brands.enum';
import {ProductInfoOption} from '@/interfaces/products/productsInfoOptions.interface';
import {getKeysFromEnum} from '@/utils/enumTransformators/getKeysFromEnum';
import {getValuesFromEnum} from '@/utils/enumTransformators/getValuesFromEnum';
import {getFormatedLabel} from '@/utils/stringFormaters/getFormatedLabel';

const brandKeys = getKeysFromEnum(Brand);
const brandValues = getValuesFromEnum(Brand);

export const brandOptions: ProductInfoOption[] = brandValues.map((brandValue, index): ProductInfoOption => {
  return {value: brandValue, label: getFormatedLabel(brandKeys[index])};
});
