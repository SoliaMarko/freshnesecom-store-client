import {Freshness} from '@/enums/products/freshness.enum';
import {ProductInfoOption} from '@/interfaces/products/productsInfoOptions.interface';
import {getKeysFromEnum} from '@/utils/enumTransformators/getKeysFromEnum';
import {getValuesFromEnum} from '@/utils/enumTransformators/getValuesFromEnum';
import {getFormatedLabel} from '@/utils/stringFormaters/getFormatedLabel';

const freshnessKeys = getKeysFromEnum(Freshness);
const freshnessValues = getValuesFromEnum(Freshness);

export const freshnessOptions: ProductInfoOption[] = freshnessValues.map((freshnessValue, index): ProductInfoOption => {
  return {value: freshnessValue, label: getFormatedLabel(freshnessKeys[index])};
});
