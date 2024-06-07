import CustomMenu from '@/components/Custom/CustomMenu/CustomMenu';
import {SortBy} from '@/enums/sort/sortBy.enum';
import {getTransformedArrayWithIDs} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import {getKeysFromEnum} from '@/utils/enumTransformators/getKeysFromEnum';
import {Box, Divider, Paper, Typography} from '@mui/material';
import {ReactElement} from 'react';
import OrderButtons from './OrderButtons/OrderButtons';
import {Order} from '@/enums/sort/order.enum';

interface SortWidgetProps {
  handleToggleSortBy: (sortBy: SortBy) => void;
  selectedSortBy: SortBy;
  handleToggleOrder: (order: Order) => void;
  selectedOrder: Order;
}

const SortWidget = ({handleToggleSortBy, selectedSortBy, handleToggleOrder, selectedOrder}: SortWidgetProps): ReactElement => {
  const sortOptions = getTransformedArrayWithIDs(getKeysFromEnum(SortBy));

  const handleSelectSort = (option: string): void => {
    handleToggleSortBy(SortBy[option as keyof typeof SortBy]);
  };

  return (
    <Box className="flex flex-row items-center gap-2 sm:gap-8">
      <Paper component="form" className="my-4 flex w-64 flex-row items-center justify-around bg-primary-700 md:px-4 md:py-2">
        <Typography className="customH4 sm:customH3 m-0 font-normal">Sort by</Typography>
        <Divider className="m-1 h-9" orientation="vertical" />
        <CustomMenu options={sortOptions} handleSelectOption={handleSelectSort}>
          {SortBy[selectedSortBy] || 'select'}
        </CustomMenu>
      </Paper>
      {selectedSortBy && <OrderButtons handleOrderToggle={handleToggleOrder} selectedOrder={selectedOrder} />}
    </Box>
  );
};

export default SortWidget;
