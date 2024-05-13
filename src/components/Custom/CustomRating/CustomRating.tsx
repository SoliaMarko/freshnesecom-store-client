import {ReactElement, SyntheticEvent, useState} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

interface BasicRatingProps {
  defaultRatingValue?: number;
  maxRatingValue?: number;
  unchangeable?: boolean;
}

export const BasicRating = ({defaultRatingValue = 1.5, maxRatingValue = 5, unchangeable = true}: BasicRatingProps): ReactElement => {
  const [ratingValue, setRatingValue] = useState<number | null>(defaultRatingValue);
  const handleRatingValue = (_: SyntheticEvent<Element, Event>, newRatingValue: number | null): void => {
    setRatingValue(() => newRatingValue);
  };

  return (
    <Box className="my-3 text-left">
      <Rating
        name="custom-controlled-rating"
        value={ratingValue}
        max={maxRatingValue}
        precision={0.5}
        readOnly={unchangeable}
        onChange={handleRatingValue}
        emptyIcon={<StarBorderIcon className="text-primary-300" />}
        icon={<StarIcon className="text-primary" />}
      />
    </Box>
  );
};
