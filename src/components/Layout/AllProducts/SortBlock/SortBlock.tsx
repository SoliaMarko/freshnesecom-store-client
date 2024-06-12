import SortWidget from '@/features/sort/SortWidget';
import {Box} from '@mui/material';
import {ReactElement, useCallback, useEffect, useState} from 'react';
import {NewParams} from '../ProductsWithSortAndFiltersContainer/ProductsWithSortAndFiltersContainer';
import {setFilters} from '@/store/slices/filters.slice';
import {SortBy} from '@/enums/sort/sortBy.enum';
import {Order} from '@/enums/sort/order.enum';
import {useAppDispatch} from '@/hooks/api/apiHooks';

interface SortBlockProps {
  handleSearchParamsChange: (params: NewParams) => void;
}

const SortBlock = ({handleSearchParamsChange}: SortBlockProps): ReactElement => {
  const [selectedSortBy, setSelectedSortBy] = useState<SortBy>(SortBy.Recency);
  const [selectedOrder, setSelectedOrder] = useState<Order>(Order.DESC);
  const dispatch = useAppDispatch();

  const handleToggleSortBy = useCallback((sortBy: SortBy): void => {
    setSelectedSortBy(sortBy);
  }, []);

  const handleToggleOrder = useCallback((order: Order): void => {
    setSelectedOrder(order);
  }, []);

  useEffect(() => {
    dispatch(setFilters({sortBy: selectedSortBy}));
    handleSearchParamsChange({sortBy: selectedSortBy});
  }, [selectedSortBy]);

  useEffect(() => {
    dispatch(setFilters({order: selectedOrder}));
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
