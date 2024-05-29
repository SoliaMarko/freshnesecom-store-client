import {Controller, useForm} from 'react-hook-form';
import {Box} from '@mui/material';
import PriceFilter from '@/features/filters/PriceFilter/PriceFilter';
import {Category} from '@/enums/products/categories.enum';
import {useEffect} from 'react';
import debounce from 'lodash.debounce';
import {useAppDispatch} from '@/hooks/apiHooks';
import {setFilters} from '@/store/slices/filters.slice';
import {NewParams} from '@/components/Layout/Home/ProductsWithFiltersContainer/ProductsWithFiltersContainer';
import RatingFilter from '@/features/filters/RatingFilter/RatingFilter';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';
import CategoriesFilter from '@/features/filters/CategoriesFilter/CategoriesFilter';

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
  const {minPrice, maxPrice, minRating, maxRating, category} = useSelector((state: IRootState) => state.filter);
  const {control, watch, getValues, handleSubmit} = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      priceRange: [minPrice, maxPrice],
      ratingRange: [minRating, maxRating],
      category: category
    }
  });
  const dispatch = useAppDispatch();

  const onSubmit = (): void => {
    const {priceRange, ratingRange, category} = getValues();
    const formattedFilters = {
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      minRating: ratingRange[0],
      maxRating: ratingRange[1],
      category: category
    };
    dispatch(setFilters(formattedFilters));
    handleSearchParamsChange({page: 0, ...formattedFilters});
  };

  const debouncedSubmit = debounce(onSubmit, 500);

  useEffect(() => {
    const subscription = watch(() => handleSubmit(debouncedSubmit)());

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form>
      <Box className="flex flex-col gap-12">
        <Controller control={control} name="category" render={({field: {onChange}}) => <CategoriesFilter onChange={onChange} />} />
        <Controller control={control} name="ratingRange" render={({field: {onChange}}) => <RatingFilter onChange={onChange} />} />
        <Controller control={control} name="priceRange" render={({field: {onChange}}) => <PriceFilter onChange={onChange} />} />
      </Box>
    </form>
  );
};

export default ProductFiltersForm;
