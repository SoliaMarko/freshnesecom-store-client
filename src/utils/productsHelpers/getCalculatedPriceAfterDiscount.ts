export const getCalculatedPriceAfterDiscount = (initialPrice: number, discount: number): number => {
  return Number((((100 - discount) * initialPrice) / 100).toFixed(2));
};
