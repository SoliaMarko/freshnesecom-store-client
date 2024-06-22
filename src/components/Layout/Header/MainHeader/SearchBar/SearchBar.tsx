import {ReactElement, useCallback, useEffect} from 'react';
import {Divider, IconButton, InputBase, Paper} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomMenu from '@/components/Custom/CustomMenu/CustomMenu';
import {temporalCategories} from '@/temporalData/temporalData';
import clsx from 'clsx';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import {Category} from '@/enums/products/categories.enum';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';
import {useProducts} from '@/hooks/products/useProducts';
import {useGetAllProductsQuery} from '@/store/services/productsApi';
import {Controller, useForm} from 'react-hook-form';
import debounce from 'lodash.debounce';

interface FormInputs {
  category: Category;
  search: string;
}

interface SearchBarProps {
  classNames?: string;
}

const SearchBar = ({classNames}: SearchBarProps): ReactElement => {
  const categoriesHeaders = getTransformedArrayWithIDs(temporalCategories.map((category) => category.value.header));
  const {searchParamsFitlers} = useSelector((state: IRootState) => state.filter);
  const {category} = searchParamsFitlers;
  const {
    handlers: {handleSearchParamsChange}
  } = useProducts({
    getProducts: useGetAllProductsQuery
  });

  const {control, watch, getValues, handleSubmit} = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      category: Category.AllCategories,
      search: ''
    }
  });

  const onSubmit = (): void => {
    const {category, search} = getValues();
    const formattedFilters = {
      category: category,
      search: search
    };

    handleSearchParamsChange({page: 0, ...formattedFilters});
  };

  const debouncedSubmit = debounce(onSubmit, 500);

  useEffect(() => {
    const subscription = watch(() => handleSubmit(debouncedSubmit)());

    return () => subscription.unsubscribe();
  }, [watch]);

  const handleToggleCategory = useCallback((category: Category): void => {
    handleSearchParamsChange({category: category});
  }, []);

  const handleSelectCategory = (option: string): void => {
    handleToggleCategory(Category[option as keyof typeof Category]);
  };

  return (
    <Paper component="form" className={clsx('flex w-full bg-primary-700 md:w-3/6', classNames)}>
      <Controller
        control={control}
        name="category"
        render={() => (
          <CustomMenu options={categoriesHeaders} handleSelectOption={handleSelectCategory} classNames="w-56">
            {Category[category] || 'All Categories'}
          </CustomMenu>
        )}
      />
      <Divider className="m-1 h-9" orientation="vertical" />
      <Controller
        control={control}
        name="search"
        render={({field: {onChange}}) => <InputBase className="ml-1 flex-1" placeholder="Search Products, categories ..." onChange={onChange} />}
      />
      <IconButton type="button" className="p-2.5" aria-label="search">
        <SearchIcon className="text-primary" />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
