import {Brand} from '@/enums/products/brands.enum';
import {Box, Checkbox, FormControlLabel, Typography} from '@mui/material';
import clsx from 'clsx';
import {ChangeEvent, ReactElement, ReactNode} from 'react';

interface BrandCheckboxItemProps {
  children: ReactNode;
  currentBrand: Brand;
  selectedBrands?: Brand[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BrandCheckboxItem = ({children, currentBrand, selectedBrands, onChange}: BrandCheckboxItemProps): ReactElement => {
  const selectedClasses = selectedBrands?.includes(currentBrand) && 'font-semibold text-secondary';

  return (
    <FormControlLabel
      name="brand-filter-checkbox"
      value={currentBrand}
      control={<Checkbox checked={selectedBrands?.includes(currentBrand)} value={currentBrand} onChange={onChange} className="text-secondary" />}
      label={
        <Box className="flex min-w-80 flex-row justify-between rounded-lg px-2 py-1 capitalize text-primary">
          <Typography className={clsx('customH3 m-0 truncate font-normal hover:font-semibold hover:text-secondary', selectedClasses)}>
            {children}
          </Typography>
        </Box>
      }
    />
  );
};

export default BrandCheckboxItem;
