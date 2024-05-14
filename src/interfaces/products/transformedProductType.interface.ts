import {AdditionalDescription} from './productEntity.interface';

interface TransformedProducer {
  category: string;
  name: string;
}

export interface TransformedProductType {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  mainDescription: string;
  additionalDescriptions?: AdditionalDescription[];
  countryCode?: string;
  deliveryArea?: string[];
  deliveryFrom?: string;
  discount?: number;
  freeShipping: boolean;
  freshness: string;
  images: string[];
  inStockCount: number;
  initialPrice: number;
  priceAfterDiscount?: number;
  producer?: TransformedProducer;
  quantityUnits?: string[];
  sizes?: string[];
  colors?: string[];
  rating?: number;
}
