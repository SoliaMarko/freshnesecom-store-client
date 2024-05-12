interface TransformedProducer {
  category: string;
  name: string;
}

export interface CardProductType {
  id: string;
  title: string;
  mainDescription: string;
  image: string;
  rating?: number;
  initialPrice: number;
  discount: number;
  priceAfterDiscount: number;
  freshness: string;
  producer?: TransformedProducer;
  delivery?: string;
  stock: number;
  freeShipping: boolean;
}
