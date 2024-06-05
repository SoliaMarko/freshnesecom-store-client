import {Box, Typography} from '@mui/material';
import {ReactElement, useEffect} from 'react';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import {Brand} from '@/enums/products/brands.enum';
import BrandCheckboxItem from './BrandCheckboxItem/BrandCheckboxItem';
import {ProductInfoOption} from '@/interfaces/products/productsInfoOptions.interface';

interface BrandsFilterProps {
  onChange: (brand: Brand[]) => void;
  options: ProductInfoOption[];
  handleAddSelectedBrand: (brand: Brand) => void;
  handleRemoveSelectedBrand: (brand: Brand) => void;
  selectedBrands: Brand[];
}

const BrandsFilter = ({onChange, options, handleAddSelectedBrand, handleRemoveSelectedBrand, selectedBrands}: BrandsFilterProps): ReactElement => {
  const handleCheckboxChange = (value: number, isChecked: boolean): void => {
    if (isChecked) handleAddSelectedBrand(value);
    else handleRemoveSelectedBrand(value);
  };

  useEffect(() => {
    onChange(selectedBrands);
  }, [selectedBrands]);

  return (
    <Box className="flex max-h-64 max-w-36 flex-col gap-4 pr-5 md:max-w-40 lg:max-w-56 xl:max-w-64 2xl:max-w-80">
      <Typography className="customH2 m-0 text-left text-primary">Brands</Typography>
      <Box className="overflow-y-auto overflow-x-hidden">
        {getTransformedArrayWithIDs(options).map((categoryInfo) => {
          const {
            id,
            value: {value, label}
          } = categoryInfo;

          return (
            <BrandCheckboxItem
              key={id}
              currentBrand={value}
              selectedBrands={selectedBrands}
              onChange={(event) => handleCheckboxChange(value, event.target.checked)}
            >
              {label}
            </BrandCheckboxItem>
          );
        })}
      </Box>
    </Box>
  );
};

export default BrandsFilter;
