import {ReactElement, useCallback, useState} from 'react';
import {Divider, IconButton, InputBase, Paper} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomMenu from '@/components/Custom/CustomMenu/CustomMenu';
import {temporalCategories} from '@/temporalData/temporalData';
import clsx from 'clsx';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import {Category} from '@/enums/products/categories.enum';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';

interface SearchBarProps {
  classNames?: string;
}

const SearchBar = ({classNames}: SearchBarProps): ReactElement => {
  const categoriesHeaders = getTransformedArrayWithIDs(temporalCategories.map((category) => category.value.header));
  const {searchParamsFitlers} = useSelector((state: IRootState) => state.filter);
  const {category} = searchParamsFitlers;
  const [selectedCategory, setSelectedCategory] = useState<Category>(category);

  const handleToggleCategory = useCallback((category: Category): void => {
    setSelectedCategory(category);
  }, []);

  const handleSelectCategory = (option: string): void => {
    handleToggleCategory(Category[option as keyof typeof Category]);
  };

  return (
    <Paper component="form" className={clsx('flex w-full bg-primary-700 md:w-3/6', classNames)}>
      <CustomMenu options={categoriesHeaders} handleSelectOption={handleSelectCategory} classNames="w-56">
        {Category[selectedCategory] || 'All Categories'}
      </CustomMenu>
      <Divider className="m-1 h-9" orientation="vertical" />
      <InputBase className="ml-1 flex-1" placeholder="Search Products, categories ..." />
      <IconButton type="button" className="p-2.5" aria-label="search">
        <SearchIcon className="text-primary" />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
