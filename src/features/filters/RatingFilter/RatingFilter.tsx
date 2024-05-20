import CustomSlider from '@/components/Custom/CustomSlider/CustomSlider';
import {RangeConstraints} from '@/components/Layout/Home/Filters/Filters';
import {NewParams} from '@/components/Layout/Home/ProductsWithFiltersContainer/ProductsWithFiltersContainer';
import {setFilters} from '@/store/slices/filters.slice';
import {Box, Typography} from '@mui/material';
import debounce from 'lodash.debounce';
import {ReactElement, useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

interface RatingConstraints {
  minRating: number;
  maxRating: number;
}

interface RatingFilterProps {
  handleSearchParamsChange: (params: NewParams) => void;
}

const defaultConstraints = {min: 0, max: 5};

const RatingFilter = ({handleSearchParamsChange}: RatingFilterProps): ReactElement => {
  const [range, _setRange] = useState<RangeConstraints>(defaultConstraints);
  const [ratingConstraints, setRatingConstraints] = useState<RatingConstraints>({
    minRating: range.min,
    maxRating: range.max
  });
  const {minRating: min, maxRating: max} = ratingConstraints;
  const dispatch = useDispatch();

  const debouncedFilter = useCallback(
    debounce((values) => {
      dispatch(setFilters(values));
      handleSearchParamsChange({...values});
    }, 300),
    []
  );

  const handleMinChange = useCallback((minRatingConstraint: number): void => {
    setRatingConstraints((prev) => ({...prev, minRating: minRatingConstraint}));
  }, []);

  const handleMaxChange = useCallback((maxRatingConstraint: number): void => {
    setRatingConstraints((prev) => ({...prev, maxRating: maxRatingConstraint}));
  }, []);

  useEffect(() => {
    debouncedFilter(ratingConstraints);
  }, [ratingConstraints]);

  return (
    <Box className="flex max-w-80 flex-col gap-4 pr-5">
      <Typography className="customH2 m-0 text-left">Rating</Typography>
      <CustomSlider range={range} values={{min, max}} handleMin={handleMinChange} handleMax={handleMaxChange} classNames="text-ratingStars" />
    </Box>
  );
};

export default RatingFilter;
