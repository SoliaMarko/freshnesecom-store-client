import {Box, Typography} from '@mui/material';
import {ReactElement, useEffect} from 'react';
import {Brand} from '@/enums/products/brands.enum';
import {type Option} from '@/components/Custom/CheckboxGroup/CheckboxGroup';
import CheckboxGroup from '@/components/Custom/CheckboxGroup/CheckboxGroup';
import {Control} from 'react-hook-form';

interface BrandsFilterProps {
  onChange: (brand: Brand[]) => void;
  options: Option[];
  selectedBrands: Brand[];
  control: Control<any>;
}

const BrandsFilter = ({onChange, options, selectedBrands, control}: BrandsFilterProps): ReactElement => {
  useEffect(() => {
    onChange(selectedBrands);
  }, [selectedBrands]);

  return (
    <Box className="flex max-h-64 w-36 min-w-56 flex-col gap-4 xl:w-80">
      <Typography className="heading m-0 text-left text-lg text-primary xl:text-2xl">Brands</Typography>
      <Box className="overflow-y-auto overflow-x-hidden">
        <CheckboxGroup name="brands" options={options} control={control} />
      </Box>
    </Box>
  );
};

export default BrandsFilter;
