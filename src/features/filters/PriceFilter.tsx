import {ReactElement, useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import CustomSlider from '@/components/Custom/CustomSlider/CustomSlider';
import RangeInputs from './RangeInputs/RangeInputs';
import {useGetProductsStatsQuery} from '@/store/services/productsApi';
import {products} from '@/constants/globalConstants/global.constant';

export interface RangeConstraints {
  [key: string]: number;
}

interface PriceFilterProps {
  onChange: (price: number[]) => void;
}

const defaultConstraints = {min: products.MIN_POSSIBLE_PRICE, max: products.MAX_POSSIBLE_PRICE};

const PriceFilter = ({onChange}: PriceFilterProps): ReactElement => {
  const {data: stats, isLoading} = useGetProductsStatsQuery();
  const [range, setRange] = useState<RangeConstraints>(defaultConstraints);
  const [priceConstraints, setPriceConstraints] = useState<RangeConstraints>({
    minPrice: range.min,
    maxPrice: range.max
  });

  const handleMinChange = (minPrice: number): void => {
    const updatedConstraints = {...priceConstraints, minPrice};
    setPriceConstraints(updatedConstraints);
    onChange(Object.values(updatedConstraints));
  };

  const handleMaxChange = (maxPrice: number): void => {
    const updatedConstraints = {...priceConstraints, maxPrice};
    setPriceConstraints(updatedConstraints);
    onChange(Object.values(updatedConstraints));
  };

  const handleMinMaxChange = (minPrice: number, maxPrice: number): void => {
    const updatedConstraints = {minPrice, maxPrice};
    setPriceConstraints(updatedConstraints);
    onChange(Object.values(updatedConstraints));
  };

  useEffect(() => {
    if (stats) {
      const {minPrice, maxPrice} = stats.data;
      handleMinMaxChange(minPrice, maxPrice);

      setRange(() => {
        return {min: minPrice, max: maxPrice};
      });
    }
  }, [stats]);

  if (isLoading) return <Box>Loading...</Box>;

  return (
    <Box className="flex max-w-80 flex-col gap-4 pr-5">
      <Typography className="customH2 m-0 text-left">Price</Typography>
      <CustomSlider range={range} values={priceConstraints} handleMinMax={handleMinMaxChange} />
      <RangeInputs range={range} values={priceConstraints} handleMin={handleMinChange} handleMax={handleMaxChange} />
    </Box>
  );
};

export default PriceFilter;
