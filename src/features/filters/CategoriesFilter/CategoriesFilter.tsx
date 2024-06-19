import {Category} from '@/enums/products/categories.enum';
import {useGetProductsStatsByFiltersQuery} from '@/store/services/productsApi';
import {Box, RadioGroup, Typography} from '@mui/material';
import {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import {categoryOptions} from '@/constants/productsConstants/categories.constant';
import CategoryRadioButton from './CategoryRadioButton/CategoryRadioButton';
import {useAppDispatch} from '@/hooks/api/apiHooks';
import {setLoading, resetLoading} from '@/store/slices/loading.slice';
import {useSelector} from 'react-redux';
import {IRootState} from '@/types/IRootState.type';

interface ProductsQuantityType {
  category: Category;
  items: number;
}

interface CategoriesFilterProps {
  onChange: (category: Category) => void;
  handleChangeSelectedCategory: (category: Category) => void;
  selectedCategory: Category;
}

const CategoriesFilter = ({onChange, handleChangeSelectedCategory, selectedCategory}: CategoriesFilterProps): ReactElement => {
  const {searchParamsFitlers} = useSelector((state: IRootState) => state.filter);
  const {brands, minRating, maxRating, minPrice, maxPrice} = searchParamsFitlers;
  const {data, error, isLoading} = useGetProductsStatsByFiltersQuery({
    brands,
    minRating,
    maxRating,
    minPrice,
    maxPrice
  });
  const [productsQuantity, setProductsQuantity] = useState<ProductsQuantityType[]>([{category: Category.Books, items: 0}]);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleChangeSelectedCategory(Number(event.target.value));
    onChange(Number(event.target.value));
  };

  useEffect(() => {
    if (data) {
      const {quantityByCategory} = data.data;
      setProductsQuantity(() => quantityByCategory);
      dispatch(resetLoading());
    }
  }, [data]);

  useEffect(() => {
    if (isLoading) dispatch(setLoading());
  }, [isLoading]);

  return (
    <Box className="flex max-w-36 flex-col gap-4 md:max-w-40 lg:max-w-56 xl:max-w-64 2xl:max-w-80">
      <Typography className="customH2 m-0 w-full text-left text-primary">Categories</Typography>
      {error ? (
        <></>
      ) : (
        <RadioGroup className="flex max-h-48 flex-col gap-1" name="category-filter-radio" value={selectedCategory} onChange={handleChange}>
          <CategoryRadioButton
            quantityInCurrentCategory={productsQuantity.reduce((acc, cur) => acc + cur.items, 0)}
            currentCategory={Category.AllCategories}
            selectedCategory={selectedCategory}
          >
            All Categories
          </CategoryRadioButton>
          {getTransformedArrayWithIDs(categoryOptions).map((categoryInfo) => {
            const {
              id,
              value: {value, label}
            } = categoryInfo;
            const quantity = productsQuantity?.find(({category}) => category === value)?.items;
            if (quantity)
              return (
                <CategoryRadioButton key={id} quantityInCurrentCategory={quantity} currentCategory={value} selectedCategory={selectedCategory}>
                  {label}
                </CategoryRadioButton>
              );
          })}
        </RadioGroup>
      )}
    </Box>
  );
};

export default CategoriesFilter;
