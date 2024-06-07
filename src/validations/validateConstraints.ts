import {RangeConstraints} from '@/features/filters/PriceFilter/PriceFilter';

export const validateConstraints = (min: number, max: number, range: RangeConstraints): boolean => {
  if (min > max || min < range.min || max > range.max) return false;

  return true;
};
