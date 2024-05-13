import {ChangeEvent, ReactElement} from 'react';
import {Box} from '@mui/material';
import CustomPagination from '@/components/Custom/CustomPagination/CustomPagination';
import ShowMoreButton from '@/components/Custom/Buttons/ProductFooterButton/ShowMoreButton';
import AmountBlock from './AmountBlock';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {ProductsMetadataType} from '@/interfaces/products/productsMetadataType.interface';

interface ProductsFooterProps {
  productsData: {data: ProductEntity[]; meta: ProductsMetadataType};
  page?: number;
  handlePageChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const ProductsFooter = ({productsData, page, handlePageChange}: ProductsFooterProps): ReactElement => {
  console.log(productsData);
  const {meta: productsMetadata} = productsData;
  const {pagesCount} = productsMetadata;

  return (
    <Box className="flex flex-row justify-between px-11 py-4">
      <CustomPagination count={pagesCount} page={page} handlePageChange={handlePageChange} />
      <ShowMoreButton />
      <AmountBlock value={productsMetadata.itemsCount} label="products" />
    </Box>
  );
};

export default ProductsFooter;
