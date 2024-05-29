import CustomChip from '@/components/Custom/CustomChips/CustomChip';
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
      name="category-filter-radio"
      value={currentCategory}
      control={<Radio style={{display: 'none'}} />}
      label={
        <Box
          className={clsx(
            'flex min-w-80 flex-row justify-between rounded-lg px-2 py-1 capitalize text-primary hover:bg-secondary-400',
            selectedClasses
          )}
        >
          <Typography className="customH3 m-0 font-normal">{children}</Typography>
          <CustomChip value={quantityInCurrentCategory.toString()} classNames="text-secondary bg-secondary-500" />
        </Box>
      }
    />
  );
};

export default CategoryRadioButton;
