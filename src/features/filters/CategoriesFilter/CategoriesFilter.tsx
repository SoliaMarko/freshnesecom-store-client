import {NewParams} from '@/components/Layout/Home/ProductsWithFiltersContainer/ProductsWithFiltersContainer';
import {Category} from '@/enums/products/categories.enum';
import {useGetProductsStatsQuery} from '@/store/services/productsApi';
import {Box, Typography} from '@mui/material';
import {Fragment, ReactElement, useCallback, useEffect, useState} from 'react';
import CategoryItemButton from './CategoryItemButton/CategoryItemButton';
import debounce from 'lodash.debounce';
import {useDispatch} from 'react-redux';
import {setFilters} from '@/store/slices/filters.slice';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import {categoryOptions} from '@/constants/productsConstants/categories.constant';
import Error from '@/pages/Error/Error';

interface CategoriesFilterProps {
  handleSearchParamsChange: (params: NewParams) => void;
}

const CategoriesFilter = ({handleSearchParamsChange}: CategoriesFilterProps): ReactElement => {
  const {data, error, isLoading} = useGetProductsStatsQuery({});
  const [productsQuantity, setProductsQuantity] = useState([{category: 1, items: 0}]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const dispatch = useDispatch();

  const handleCategoryToggle = useCallback((category: Category | null): void => {
    setSelectedCategory(() => category);
  }, []);

  const debouncedFilter = useCallback(
    debounce((value) => {
      dispatch(setFilters({selectedCategory: value}));
      handleSearchParamsChange({selectedCategory: value});
    }, 300),
    []
  );

  useEffect(() => {
    debouncedFilter(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (!data) return;
    const {quantityByCategory} = data.data;
    setProductsQuantity(() => quantityByCategory);
  }, [data]);

  if (error) {
    return <Error />;
  }

  if (isLoading) return <Box>Loading...</Box>;

  return (
    <Box className="flex max-w-80 flex-col gap-4  pr-5">
      <Typography className="customH2 m-0 text-left">Categories</Typography>
      <Box className="flex max-h-48 flex-col items-stretch gap-1 overflow-y-auto">
        <CategoryItemButton
          value={productsQuantity.reduce((acc, cur) => acc + cur.items, 0)}
          category={null}
          handleCategoryToggle={handleCategoryToggle}
          selectedCategory={selectedCategory}
        >
          All Categories
        </CategoryItemButton>
        {getTransformedArrayWithIDs(categoryOptions).map((categoryInfo) => {
          const {
            id,
            value: {value, label}
          } = categoryInfo;
          const quantity = productsQuantity?.find(({category}) => category === value)?.items;

          if (quantity)
            return (
              <Fragment key={id}>
                <CategoryItemButton value={quantity} category={value} handleCategoryToggle={handleCategoryToggle} selectedCategory={selectedCategory}>
                  {label}
                </CategoryItemButton>
              </Fragment>
            );
        })}
      </Box>
    </Box>
  );
};

export default CategoriesFilter;
