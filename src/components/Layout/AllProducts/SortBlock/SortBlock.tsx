import SortWidget from '@/features/sort/SortWidget';
import {Box} from '@mui/material';
import {ReactElement, useCallback, useEffect, useState} from 'react';
import {NewParams} from '../ProductsWithSortAndFiltersContainer/ProductsWithSortAndFiltersContainer';
import {SortBy} from '@/enums/sort/sortBy.enum';
import {Order} from '@/enums/sort/order.enum';
import {IRootState} from '@/types/IRootState.type';
import {useSelector} from 'react-redux';

interface SortBlockProps {
  handleSearchParamsChange: (params: NewParams) => void;
}

const SortBlock = ({handleSearchParamsChange}: SortBlockProps): ReactElement => {
  const {searchParamsFitlers} = useSelector((state: IRootState) => state.filter);
  const {sortBy, order} = searchParamsFitlers;
  const [selectedSortBy, setSelectedSortBy] = useState<SortBy>(sortBy || SortBy.Recency);
  const [selectedOrder, setSelectedOrder] = useState<Order>(order || Order.DESC);

  const handleToggleSortBy = useCallback((sortBy: SortBy): void => {
    setSelectedSortBy(sortBy);
  }, []);

  const handleToggleOrder = useCallback((order: Order): void => {
    setSelectedOrder(order);
  }, []);

  useEffect(() => {
    handleSearchParamsChange({sortBy: selectedSortBy});
  }, [selectedSortBy]);

  useEffect(() => {
    handleSearchParamsChange({order: selectedOrder});
  }, [selectedOrder]);

  return (
    <Box className="flex justify-start">
      <SortWidget
        handleToggleSortBy={handleToggleSortBy}
        selectedSortBy={selectedSortBy}
        handleToggleOrder={handleToggleOrder}
        selectedOrder={selectedOrder}
      />
    </Box>
  );
};

export default SortBlock;
