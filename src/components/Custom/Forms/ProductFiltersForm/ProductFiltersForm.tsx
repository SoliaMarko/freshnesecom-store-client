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
import {Brand} from '@/enums/products/brands.enum';
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
  const {minPrice, maxPrice, minRating, maxRating, category, brands} = searchParamsFitlers;
  const {control, watch, getValues, handleSubmit, reset} = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      priceRange: [minPrice, maxPrice],
      ratingRange: [minRating, maxRating],
      category: category,
      brands: brands
    }
  });
  const {priceRange, ratingRange, category: categoryFromInput, brands: brandsFromInput} = getValues();
  const [selectedCategory, setSelectedCategory] = useState<Category>(categoryFromInput);
  const [selectedBrands, setSelectedBrands] = useState<Brand[]>(brandsFromInput as unknown as Brand[]);
  const [currentBrandOptions, setCurrentBrandOptions] = useState<ProductInfoOption[]>(brandOptions);
  const dispatch = useAppDispatch();

  const handleAddSelectedBrand = (value: Brand): void => {
    if (selectedBrands.length) setSelectedBrands((prev) => [...prev, value]);
    else setSelectedBrands([value]);
  };

  const handleRemoveSelectedBrand = (value: Brand): void => {
    setSelectedBrands((prev) => prev.filter((brand) => brand !== value));
  };

  const resetSelectedBrands = (): void => {
    setSelectedBrands([]);
    handleSearchParamsChange({brands: ''});
    dispatch(updateFilters());
  };

  const handleResetFilters = (): void => {
    reset();
    setSelectedCategory(Category.AllCategories);
    setSelectedBrands([]);
    handleSearchParamsChange(initialFilterValues);
    dispatch(resetFilters());
  };

  const handleChangeSelectedCategory = (category: Category): void => {
    const categoryRegex = new RegExp(`^${category}`);

    if (category === 0) setCurrentBrandOptions(brandOptions);
    else setCurrentBrandOptions(brandOptions.filter((option) => categoryRegex.test(option.value.toString())));

    setSelectedCategory(category);
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
      brands: (brands as unknown as Brand[])?.join(',') || brands
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
      <Box className="flex flex-col items-center gap-6 md:gap-8 lg:gap-12">
        <Controller
          control={control}
          name="category"
          render={({field: {onChange}}) => (
            <CategoriesFilter onChange={onChange} handleChangeSelectedCategory={handleChangeSelectedCategory} selectedCategory={selectedCategory} />
          )}
        />
        <Controller
          control={control}
          name="brands"
          render={({field: {onChange}}) => (
            <BrandsFilter
              onChange={onChange}
              options={currentBrandOptions}
              handleAddSelectedBrand={handleAddSelectedBrand}
              handleRemoveSelectedBrand={handleRemoveSelectedBrand}
              selectedBrands={selectedBrands}
            />
          )}
        />
        <Controller
          control={control}
          name="ratingRange"
          render={({field: {onChange}}) => <RatingFilter onChange={onChange} selectedRatingRange={ratingRange} />}
        />
        <Controller
          control={control}
          name="priceRange"
          render={({field: {onChange}}) => <PriceFilter onChange={onChange} selectedPriceRange={priceRange} />}
        />
        <ResetButton handleClick={handleResetFilters} />
      </Box>
    </form>
  );
};

export default ProductFiltersForm;
