import {Controller, useForm} from 'react-hook-form';
import {Box} from '@mui/material';
import PriceFilter from '@/features/filters/PriceFilter';
import {Category} from '@/enums/products/categories.enum';
import {useCallback, useEffect} from 'react';
import debounce from 'lodash.debounce';
import {useAppDispatch} from '@/hooks/apiHooks';
import {setFilters} from '@/store/slices/filters.slice';
import {NewParams} from '@/components/Layout/Home/ProductsWithFiltersContainer/ProductsWithFiltersContainer';

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
  const {control, watch} = useForm<FormInputs>({
    mode: 'onChange'
  });
  const priceRange = watch('priceRange');
  const dispatch = useAppDispatch();

  const debouncedFilter = useCallback(
    debounce((values) => {
      dispatch(setFilters({minPrice: values[0], maxPrice: values[1]}));
      handleSearchParamsChange({page: 0, minPrice: values[0], maxPrice: values[1]});
    }, 500),
    []
  );

  useEffect(() => {
    debouncedFilter(priceRange);
  }, [priceRange]);

  return (
    <form>
      <Box>
        <Controller control={control} name="priceRange" render={({field: {onChange}}) => <PriceFilter onChange={onChange} />} />
      </Box>
    </form>
  );
};

export default ProductFiltersForm;
