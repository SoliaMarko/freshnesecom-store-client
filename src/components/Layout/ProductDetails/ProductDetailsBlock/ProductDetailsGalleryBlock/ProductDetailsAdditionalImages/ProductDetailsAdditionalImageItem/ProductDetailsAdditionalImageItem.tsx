import {ReactElement} from 'react';

interface ProductDetailsAdditionalImageItemProps {
  imageURL: string;
  handleClick?: (imgURL: string) => void;
}

const ProductDetailsAdditionalImageItem = ({imageURL, handleClick}: ProductDetailsAdditionalImageItemProps): ReactElement => {
  const handleImageClick = (): void => {
    if (!handleClick) return;
    handleClick(imageURL);
  };

  return <img src={imageURL} className="aspect-4/3 w-full cursor-pointer rounded-2xl object-cover" onClick={handleImageClick} />;
};

export default ProductDetailsAdditionalImageItem;
