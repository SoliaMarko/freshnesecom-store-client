import {ProductInfoOption} from '@/interfaces/products/productsInfoOptions.interface';

export const getValueByLabel = (options: ProductInfoOption[], label: string): number =>
  options.find((option) => option.label === label)?.value || options[0].value;
