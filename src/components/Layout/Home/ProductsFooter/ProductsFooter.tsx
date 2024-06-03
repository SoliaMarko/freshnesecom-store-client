import {ReactElement} from 'react';
import {Box} from '@mui/material';
import CustomPagination from '@/components/Custom/CustomPagination/CustomPagination';
import ShowMoreButton from '@/components/Custom/Buttons/ProductsFooterButton/ShowMoreButton';
import AmountBlock from './AmountBlock';
import {ProductEntity} from '@/interfaces/products/productEntity.interface';
import {ProductsMetadataType} from '@/interfaces/products/productsMetadataType.interface';
import {PaginationButtonAction} from '@/enums/global/paginationButtonAction.enum';

interface ProductsFooterProps {
  productsData: {data: ProductEntity[]; meta: ProductsMetadataType};
  currentPage: number;
  handlePageChange: (page: number, action: PaginationButtonAction) => void;
}

const ProductsFooter = ({productsData, currentPage, handlePageChange}: ProductsFooterProps): ReactElement => {
  const {meta: productsMetadata} = productsData;
  const {pagesCount} = productsMetadata;

  return (
    <Box className="px:2 flex flex-col items-center justify-between gap-8 py-4 md:flex-row md:px-2">
      <Box className="flex flex-row items-center justify-between md:hidden">
        <ShowMoreButton count={pagesCount} currentPage={currentPage} handlePageChange={handlePageChange} classNames="order-1 md:order-2" />
        <AmountBlock value={productsMetadata.itemsCount} label="products" classNames="order-3" />
      </Box>
      <ShowMoreButton count={pagesCount} currentPage={currentPage} handlePageChange={handlePageChange} classNames="hidden md:block md:order-2" />
      <AmountBlock value={productsMetadata.itemsCount} label="products" classNames="hidden md:flex md:order-3" />
      <CustomPagination count={pagesCount} currentPage={currentPage} handlePageChange={handlePageChange} classNames="order-2 md:order-1" />
    </Box>
  );
};

export default ProductsFooter;
