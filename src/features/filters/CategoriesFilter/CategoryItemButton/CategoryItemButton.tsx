import CustomChip from '@/components/Custom/CustomChips/CustomChip';
import {Category} from '@/enums/products/categories.enum';
import {Button, Typography} from '@mui/material';
import clsx from 'clsx';
import {ReactElement, ReactNode} from 'react';

interface CategoryItemButtonProps {
  children: ReactNode;
  category: Category | null;
  value: number | string;
  handleCategoryToggle: (value: Category | null) => void;
  selectedCategory?: Category | null;
}

const CategoryItemButton = ({children, category, value, handleCategoryToggle, selectedCategory}: CategoryItemButtonProps): ReactElement => {
  const handleClick = (): void => {
    handleCategoryToggle(category);
  };

  const selectedClasses = selectedCategory === category && 'bg-secondary-400';

  return (
    <Button
      className={clsx('flex flex-row justify-between px-2 capitalize text-primary hover:bg-secondary-400', selectedClasses)}
      onClick={handleClick}
    >
      <Typography className="customH3 m-0 font-normal">{children}</Typography>
      <CustomChip value={value.toString()} classNames="text-secondary bg-secondary-500" />
    </Button>
  );
};

export default CategoryItemButton;
