import {ReactElement, useCallback, useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import debounce from 'lodash.debounce';
import CustomSlider from '@/components/Custom/CustomSlider/CustomSlider';
import RangeInputs from '../RangeInputs/RangeInputs';
import {useGetProductsStatsQuery} from '@/store/services/productsApi';
import {validateConstraints} from '@/validations/validateConstraints';
import {setFilters} from '@/store/slices/filters.slice';
import {useDispatch} from 'react-redux';
import {NewParams} from '@/components/Layout/Home/ProductsWithFiltersContainer/ProductsWithFiltersContainer';
import {products} from '@/constants/globalConstants/global.constant';
import {RangeConstraints} from '@/components/Layout/Home/Filters/Filters';

interface PriceConstraints {
  minPrice: number;
  maxPrice: number;
}

interface PriceFilterProps {
  handleSearchParamsChange: (params: NewParams) => void;
}

const defaultConstraints = {min: products.MIN_POSSIBLE_PRICE, max: products.MAX_POSSIBLE_PRICE};

const PriceFilter = ({handleSearchParamsChange}: PriceFilterProps): ReactElement => {
  const {data, isLoading} = useGetProductsStatsQuery({});
  const [range, setRange] = useState<RangeConstraints>(defaultConstraints);
  const [priceConstraints, setPriceConstraints] = useState<PriceConstraints>({
    minPrice: range.min,
    maxPrice: range.max
  });
  const {minPrice: min, maxPrice: max} = priceConstraints;
  const dispatch = useDispatch();

  const debouncedFilter = useCallback(
    debounce((values) => {
      dispatch(setFilters(values));
      handleSearchParamsChange({...values});
    }, 300),
    []
  );

  const resetMin = (): void => {
    setPriceConstraints((prev) => ({...prev, minPrice: range.min}));
  };

  const resetMax = (): void => {
    setPriceConstraints((prev) => ({...prev, maxPrice: range.max}));
  };

  const handleMinChange = useCallback((minPriceConstraint: number): void => {
    if (!validateConstraints(minPriceConstraint, priceConstraints.maxPrice, range)) {
      resetMin();
      return;
    }

    setPriceConstraints((prev) => ({...prev, minPrice: minPriceConstraint}));
  }, []);

  const handleMaxChange = useCallback((maxPriceConstraint: number): void => {
    if (!validateConstraints(priceConstraints.minPrice, maxPriceConstraint, range)) {
      resetMax();
      return;
    }

    setPriceConstraints((prev) => ({...prev, maxPrice: maxPriceConstraint}));
  }, []);

  useEffect(() => {
    if (data) {
      const {minPrice, maxPrice}: {minPrice: number; maxPrice: number} = data.data;

      handleMinChange(minPrice);
      handleMaxChange(maxPrice);

      setRange(() => {
        return {min: minPrice, max: maxPrice};
      });
    }
  }, [data]);

  useEffect(() => {
    debouncedFilter(priceConstraints);
  }, [priceConstraints]);

  if (isLoading) return <Box>Loading...</Box>;

  return (
    <Box className="flex max-w-80 flex-col gap-4 pr-5">
      <Typography className="customH2 m-0 text-left">Price</Typography>
      <CustomSlider range={range} values={{min, max}} handleMin={handleMinChange} handleMax={handleMaxChange} />
      <RangeInputs range={range} values={{min, max}} handleMin={handleMinChange} handleMax={handleMaxChange} />
    </Box>
  );
};

export default PriceFilter;
