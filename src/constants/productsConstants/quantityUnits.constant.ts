import {QuantityUnit} from '@/enums/products/quantityUnits.enum';
import {ProductInfoOption} from '@/interfaces/products/productsInfoOptions.interface';
import {getKeysFromEnum} from '@/utils/enumTransformators/getKeysFromEnum';
import {getValuesFromEnum} from '@/utils/enumTransformators/getValuesFromEnum';
import {getFormatedLabel} from '@/utils/stringFormaters/getFormatedLabel';

const quantityUnitKeys = getKeysFromEnum(QuantityUnit);
const quantityUnitValues = getValuesFromEnum(QuantityUnit);

export const quantityUnitOptions: ProductInfoOption[] = quantityUnitValues.map((quantityUnitValue, index): ProductInfoOption => {
  return {value: quantityUnitValue, label: getFormatedLabel(quantityUnitKeys[index])};
});
