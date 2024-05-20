import {ReactElement} from 'react';
import {Box} from '@mui/material';
import CustomPagination from '@/components/Custom/CustomPagination/CustomPagination';
import ShowMoreButton from '@/components/Custom/Buttons/ProductFooterButton/ShowMoreButton';
import AmountBlock from './AmountBlock';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {ProductsMetadataType} from '@/interfaces/products/productsMetadataType.interface';
import {ActionType} from '../ProductsWithFiltersContainer/ProductsWithFiltersContainer';

interface ProductsFooterProps {
  productsData: {data: ProductEntity[]; meta: ProductsMetadataType};
  currentPage: number;
  handlePageChange: (page: number, action: ActionType) => void;
}

const ProductsFooter = ({productsData, currentPage, handlePageChange}: ProductsFooterProps): ReactElement => {
  const {meta: productsMetadata} = productsData;
  const {pagesCount} = productsMetadata;

  return (
    <Box className="flex flex-row justify-between px-11 py-4">
      <CustomPagination count={pagesCount} currentPage={currentPage} handlePageChange={handlePageChange} />
      <ShowMoreButton count={pagesCount} currentPage={currentPage} handlePageChange={handlePageChange} />
      <AmountBlock value={productsMetadata.itemsCount} label="products" />
    </Box>
  );
};

export default ProductsFooter;
