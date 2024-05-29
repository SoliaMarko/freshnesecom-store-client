import {Brand} from '@/enums/products/brands.enum';

export interface AdditionalDescription {
  title?: string;
  content: string;
}

export interface Producer {
  category: number;
  name: Brand;
}

export interface ProductEntity {
  _id: string;
  title: string;
  category: number;
  subCategory: number;
  images: string[];
  price: number;
  mainDescription: string;
  additionalDescriptions: AdditionalDescription[];
  discount: number;
  countryCode?: string;
  inStockCount: number;
  quantityUnits: number[];
  freshness: number;
  producer?: Producer;
  deliveryFrom?: string;
  deliveryArea?: string[];
  freeShipping: boolean;
  sizes?: string[];
  colors?: string[];
  _rating?: number;
  notes?: string;
}
