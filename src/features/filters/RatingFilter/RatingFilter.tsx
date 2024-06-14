import CustomSlider from '@/components/Custom/CustomSlider/CustomSlider';
import {Box, Typography} from '@mui/material';
import {ReactElement, useState} from 'react';
import {RangeConstraints} from '../PriceFilter/PriceFilter';
import {CustomRatingThumb} from './CustomRatingThumb';

interface RatingFilterProps {
  onChange: (rating: number[]) => void;
  selectedRatingRange: [number, number];
  range?: RangeConstraints;
}

const defaultConstraints = {min: 0, max: 5};

const RatingFilter = ({onChange, selectedRatingRange, range = defaultConstraints}: RatingFilterProps): ReactElement => {
  const [minRating, maxRating] = selectedRatingRange;
  const [ratingConstraints, setRatingConstraints] = useState<RangeConstraints>({
    min: minRating || range.min,
    max: maxRating || range.max
  });

  const handleMinMaxChange = (min: number, max: number): void => {
    const updatedConstraints = {min, max};
    setRatingConstraints(updatedConstraints);
    onChange(Object.values(updatedConstraints));
  };

  return (
    <Box className="flex max-h-64 w-full max-w-36 flex-col gap-4 pr-5 md:max-w-40 lg:max-w-56 xl:max-w-64 2xl:max-w-80">
      <Typography className="customH2 m-0 text-left">Rating</Typography>
      <CustomSlider
        range={range}
        values={ratingConstraints}
        handleMinMax={handleMinMaxChange}
        classNames="text-ratingStars"
        thumb={CustomRatingThumb}
      />
    </Box>
  );
};

export default RatingFilter;
