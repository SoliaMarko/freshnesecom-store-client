import {ReactElement, useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import CustomSlider from '@/components/Custom/CustomSlider/CustomSlider';
import RangeInputs from '../RangeInputs/RangeInputs';
import {useGetGeneralProductsStatsQuery} from '@/store/services/productsApi';
import {products} from '@/constants/globalConstants/global.constant';
import CustomPriceThumb from './CustomPriceThumb';
import {useAppDispatch} from '@/hooks/api/apiHooks';
import {setLoading, resetLoading} from '@/store/slices/loading.slice';

export interface RangeConstraints {
  [key: string]: number;
}

interface PriceFilterProps {
  onChange: (price: number[]) => void;
  selectedPriceRange: [number, number];
}

const defaultConstraints = {min: products.MIN_POSSIBLE_PRICE, max: products.MAX_POSSIBLE_PRICE};

const PriceFilter = ({onChange, selectedPriceRange}: PriceFilterProps): ReactElement => {
  const {data: stats, isLoading} = useGetGeneralProductsStatsQuery();
  const [minPriceSelected, maxPriceSelected] = selectedPriceRange;
  const [range, setRange] = useState<RangeConstraints>(defaultConstraints);
  const [priceConstraints, setPriceConstraints] = useState<RangeConstraints>({
    min: minPriceSelected || range.min,
    max: maxPriceSelected || range.max
  });
  const dispatch = useAppDispatch();

  const handleMinChange = (min: number): void => {
    const updatedConstraints = {...priceConstraints, min};
    setPriceConstraints(updatedConstraints);
    onChange(Object.values(updatedConstraints));
  };

  const handleMaxChange = (max: number): void => {
    const updatedConstraints = {...priceConstraints, max};
    setPriceConstraints(updatedConstraints);
    onChange(Object.values(updatedConstraints));
  };

  const handleMinMaxChange = (min: number, max: number): void => {
    const updatedConstraints = {min, max};
    setPriceConstraints(updatedConstraints);
    onChange(Object.values(updatedConstraints));
  };

  useEffect(() => {
    if (stats) {
      const {minPrice, maxPrice} = stats.data;
      handleMinMaxChange(minPrice, maxPrice);

      setRange(() => {
        return {min: minPriceSelected || minPrice, max: maxPriceSelected || maxPrice};
      });

      dispatch(resetLoading());
    }
  }, [stats]);

  useEffect(() => {
    handleMinMaxChange(minPriceSelected || range.min, maxPriceSelected || range.max);
  }, [minPriceSelected, maxPriceSelected]);

  useEffect(() => {
    if (isLoading) dispatch(setLoading());
  }, [isLoading]);

  return (
    <Box className="flex max-h-64 w-full min-w-48 flex-col gap-4 pr-5 md:max-w-40 lg:max-w-56 xl:max-w-64 2xl:max-w-80">
      <Typography className="heading m-0 text-left text-lg xl:text-2xl">Price</Typography>
      <CustomSlider range={range} values={priceConstraints} handleMinMax={handleMinMaxChange} classNames="text-secondary" thumb={CustomPriceThumb} />
      <RangeInputs range={range} values={priceConstraints} handleMin={handleMinChange} handleMax={handleMaxChange} />
    </Box>
  );
};

export default PriceFilter;
