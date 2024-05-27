import {Controller, useForm} from 'react-hook-form';
import {Box} from '@mui/material';
import PriceFilter from '@/features/filters/PriceFilter/PriceFilter';
import {Category} from '@/enums/products/categories.enum';
import {useEffect} from 'react';
import debounce from 'lodash.debounce';
import {useAppDispatch} from '@/hooks/apiHooks';
import {setFilters} from '@/store/slices/filters.slice';
import {NewParams} from '@/components/Layout/Home/ProductsWithFiltersContainer/ProductsWithFiltersContainer';
import RatingFilter from '@/features/filters/RatingFilter';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';

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
  const filters = useSelector((state: IRootState) => state.filter);
  const {control, watch, getValues, handleSubmit} = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      priceRange: [filters.minPrice, filters.maxPrice],
      ratingRange: [filters.minRating, filters.maxRating]
    }
  });
  const dispatch = useAppDispatch();

  const onSubmit = (): void => {
    const formFilters = getValues();
    const formattedFilters = {
      minPrice: formFilters.priceRange[0],
      maxPrice: formFilters.priceRange[1],
      minRating: formFilters.ratingRange[0],
      maxRating: formFilters.ratingRange[1]
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
        <Controller control={control} name="ratingRange" render={({field: {onChange}}) => <RatingFilter onChange={onChange} />} />
        <Controller control={control} name="priceRange" render={({field: {onChange}}) => <PriceFilter onChange={onChange} />} />
      </Box>
    </form>
  );
};

export default ProductFiltersForm;
