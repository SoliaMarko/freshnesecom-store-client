import CustomSlider from '@/components/Custom/CustomSlider/CustomSlider';
import {Box, Typography} from '@mui/material';
import {ReactElement, useState} from 'react';
import {RangeConstraints} from '../PriceFilter/PriceFilter';
import {CustomRatingThumb} from './CustomRatingThumb';

interface RatingFilterProps {
  onChange: (rating: number[]) => void;
}

const defaultConstraints = {min: 0, max: 5};

const RatingFilter = ({onChange}: RatingFilterProps): ReactElement => {
  const [range, _setRange] = useState<RangeConstraints>(defaultConstraints);
  const [ratingConstraints, setRatingConstraints] = useState<RangeConstraints>({
    min: range.min,
    max: range.max
  });

  const handleMinMaxChange = (min: number, max: number): void => {
    const updatedConstraints = {min, max};
    setRatingConstraints(updatedConstraints);
    onChange(Object.values(updatedConstraints));
  };

  return (
    <Box className="flex max-w-80 flex-col gap-4 pr-5">
      <Typography className="customH2 m-0 text-left">Rating</Typography>
      <CustomSlider
        range={range}
        values={ratingConstraints}
        handleMinMax={handleMinMaxChange}
        classNames="text-ratingStars"
        thumb={CustomRatingThumb}
        displayLabel
      />
    </Box>
  );
};

export default RatingFilter;
