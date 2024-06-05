import CustomChip from '@/components/Custom/CustomChip/CustomChip';
import {Category} from '@/enums/products/categories.enum';
import {Box, FormControlLabel, Radio, Typography} from '@mui/material';
import clsx from 'clsx';
import {ReactElement, ReactNode} from 'react';

interface CategoryRadioButtonProps {
  children: ReactNode;
  currentCategory: Category;
  quantityInCurrentCategory: number | string;
  selectedCategory?: Category;
}

const CategoryRadioButton = ({children, currentCategory, quantityInCurrentCategory, selectedCategory}: CategoryRadioButtonProps): ReactElement => {
  const selectedClasses = Number(selectedCategory) === currentCategory && 'bg-secondary-400';

  return (
    <FormControlLabel
      className="m-0 flex-1 flex-row justify-start"
      name="category-filter-radio"
      value={currentCategory}
      control={<Radio className="hidden p-0" />}
      labelPlacement="top"
      label={
        <Box
          className={clsx(
            'flex min-w-36 flex-1 flex-row justify-between rounded-lg px-2 py-1 capitalize text-primary hover:bg-secondary-400 md:min-w-40 lg:min-w-56 xl:min-w-64 2xl:min-w-80',
            selectedClasses
          )}
        >
          <Typography className="customH3 m-0 truncate font-normal">{children}</Typography>
          <CustomChip value={quantityInCurrentCategory.toString()} classNames="text-secondary bg-secondary-500" />
        </Box>
      }
    />
  );
};

export default CategoryRadioButton;
