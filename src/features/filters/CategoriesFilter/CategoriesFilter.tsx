import {Category} from '@/enums/products/categories.enum';
import {useGetProductsStatsQuery} from '@/store/services/productsApi';
import {Box, FormControl, FormLabel, RadioGroup} from '@mui/material';
import {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import Error from '@/pages/Error/Error';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import {categoryOptions} from '@/constants/productsConstants/categories.constant';
import CategoryRadioButton from './CategoryRadioButton/CategoryRadioButton';

interface ProductsQuantityType {
  category: Category;
  items: number;
}

interface CategoriesFilterProps {
  onChange: (category: Category) => void;
}

const CategoriesFilter = ({onChange}: CategoriesFilterProps): ReactElement => {
  const {data, error, isLoading} = useGetProductsStatsQuery();
  const [productsQuantity, setProductsQuantity] = useState<ProductsQuantityType[]>([{category: 1, items: 0}]);
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.AllCategories);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedCategory(Number(event.target.value));
    onChange(Number(event.target.value));
  };

  useEffect(() => {
    if (!data) return;
    const {quantityByCategory} = data.data;
    setProductsQuantity(() => quantityByCategory);
  }, [data]);

  if (isLoading) return <Box>Loading...</Box>;

  if (error) {
    return <Error />;
  }

  return (
    <FormControl className="flex max-w-80 flex-col gap-4 pr-5">
      <FormLabel className="customH2 m-0 text-left text-primary">Categories</FormLabel>
      <RadioGroup
        className="flex max-h-48 flex-col items-stretch gap-1"
        name="category-filter-radio"
        value={selectedCategory}
        onChange={handleChange}
      >
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
    </FormControl>
  );
};

export default CategoriesFilter;
