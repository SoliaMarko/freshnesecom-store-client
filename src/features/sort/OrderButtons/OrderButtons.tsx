import {ReactElement} from 'react';
import {Box} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import OrderButton from '@/components/Custom/Buttons/SortButtons/OrderButton/OrderButton';
import {Order} from '@/enums/sort/order.enum';

interface OrderButtonsProps {
  handleOrderToggle: (order: Order) => void;
  selectedOrder: Order;
}

const OrderButtons = ({handleOrderToggle, selectedOrder}: OrderButtonsProps): ReactElement => {
  const selectedClasses = 'border-sandShade-200 border-solid border-2 text-sandShade-200';

  return (
    <Box className="flex flex-row gap-1 sm:gap-2">
      <OrderButton value={Order.ASC} classNames={selectedOrder === Order.ASC ? selectedClasses : ''} handleOrderToggle={handleOrderToggle}>
        <ArrowUpwardIcon className="h-6 w-6 sm:h-8 sm:w-8" />
      </OrderButton>
      <OrderButton value={Order.DESC} classNames={selectedOrder === Order.DESC ? selectedClasses : ''} handleOrderToggle={handleOrderToggle}>
        <ArrowDownwardIcon className="h-6 w-6 sm:h-8 sm:w-8" />
      </OrderButton>
    </Box>
  );
};

export default OrderButtons;
