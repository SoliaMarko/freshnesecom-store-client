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
    <Box className="flex max-h-64 max-w-36 flex-col gap-4 pr-5 md:max-w-40 lg:max-w-56 xl:max-w-64 2xl:max-w-80">
      <Typography className="customH2 m-0 text-left text-primary">Brands</Typography>
      <Box className="overflow-y-auto overflow-x-hidden">
        <CheckboxGroup name="brands" options={options} control={control} />
      </Box>
    </Box>
  );
};

export default BrandsFilter;
