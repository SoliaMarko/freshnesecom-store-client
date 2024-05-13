import {ProductInfoOption} from '@/interfaces/products/productsInfoOptions.interface';

export const getLabelByValue = (options: ProductInfoOption[], value: number): string =>
  options.find((option) => option.value === value)?.label || options[0].label;
