import {ReactElement} from 'react';

interface ProductDetailsMainImageProps {
  imageURL: string;
}

const ProductDetailsMainImage = ({imageURL}: ProductDetailsMainImageProps): ReactElement => {
  return <img src={imageURL} className="aspect-4/3 w-full rounded-2xl object-cover shadow-xl" />;
};

export default ProductDetailsMainImage;
