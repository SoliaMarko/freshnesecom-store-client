import {Controller, useForm} from 'react-hook-form';
import {Box} from '@mui/material';
import PriceFilter from '@/features/filters/PriceFilter/PriceFilter';
import {Category} from '@/enums/products/categories.enum';
import {useEffect, useState} from 'react';
import debounce from 'lodash.debounce';
import {initialFilterValues, resetFilters, updateFilters} from '@/store/slices/filters.slice';
import {NewParams} from '@/components/Layout/AllProducts/ProductsWithSortAndFiltersContainer/ProductsWithSortAndFiltersContainer';
import RatingFilter from '@/features/filters/RatingFilter/RatingFilter';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';
import CategoriesFilter from '@/features/filters/CategoriesFilter/CategoriesFilter';
import BrandsFilter from '@/features/filters/BrandsFilter/BrandsFilter';
import {brandOptions} from '@/constants/productsConstants/producer/brands.constant';
import {ProductInfoOption} from '@/interfaces/products/productsInfoOptions.interface';
import ResetButton from '../../Buttons/FilterButtons/ResetButton';
import {useAppDispatch} from '@/hooks/api/apiHooks';

interface FormInputs {
  category: Category;
  brands: string[];
  ratingRange: [number, number];
  priceRange: [number, number];
}

interface ProductFiltersFormProps {
  handleSearchParamsChange: (params: NewParams) => void;
}

const ProductFiltersForm = ({handleSearchParamsChange}: ProductFiltersFormProps) => {
  const {searchParamsFitlers} = useSelector((state: IRootState) => state.filter);
  const {category, brands, minRating, maxRating, minPrice, maxPrice} = searchParamsFitlers;
  const {control, watch, getValues, handleSubmit, reset} = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      priceRange: [minPrice, maxPrice],
      ratingRange: [minRating, maxRating],
      category: Category.AllCategories,
      brands: brands
    }
  });
  const [currentBrandOptions, setCurrentBrandOptions] = useState<ProductInfoOption[]>(brandOptions);
  const dispatch = useAppDispatch();

  const resetSelectedBrands = (): void => {
    handleSearchParamsChange({brands: []});
    dispatch(updateFilters());
  };

  const handleResetFilters = (): void => {
    reset();
    handleSearchParamsChange(initialFilterValues);
    dispatch(resetFilters());
  };

  const handleChangeSelectedCategory = (category: Category): void => {
    const categoryRegex = new RegExp(`^${category}`);

    if (category === Category.AllCategories) setCurrentBrandOptions(brandOptions);
    else setCurrentBrandOptions(brandOptions.filter((option) => categoryRegex.test(option.value.toString())));

    handleSearchParamsChange({category: category});
    resetSelectedBrands();
  };

  const onSubmit = (): void => {
    const {priceRange, ratingRange, category, brands} = getValues();
    const formattedFilters = {
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      minRating: ratingRange[0],
      maxRating: ratingRange[1],
      category: category,
      brands: brands?.join(',') || brands
    };

    handleSearchParamsChange({page: 0, ...formattedFilters});
  };

  const debouncedSubmit = debounce(onSubmit, 500);

  useEffect(() => {
    const subscription = watch(() => handleSubmit(debouncedSubmit)());

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form>
      <Box className="flex flex-col items-center gap-3 md:gap-4 lg:gap-10">
        <Controller
          control={control}
          name="category"
          render={({field: {onChange}}) => (
            <CategoriesFilter onChange={onChange} handleChangeSelectedCategory={handleChangeSelectedCategory} selectedCategory={category} />
          )}
        />
        <Controller
          control={control}
          name="brands"
          render={({field: {onChange}}) => (
            <BrandsFilter onChange={onChange} options={currentBrandOptions} selectedBrands={brands} control={control} />
          )}
        />
        <Controller
          control={control}
          name="ratingRange"
          render={({field: {onChange}}) => <RatingFilter onChange={onChange} selectedRatingRange={[minRating, maxRating]} />}
        />
        <Controller
          control={control}
          name="priceRange"
          render={({field: {onChange}}) => <PriceFilter onChange={onChange} selectedPriceRange={[minPrice, maxPrice]} />}
        />
        <ResetButton handleClick={handleResetFilters} />
      </Box>
    </form>
  );
};

export default ProductFiltersForm;
