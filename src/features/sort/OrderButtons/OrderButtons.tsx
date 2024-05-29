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
  const selectedClasses = 'bg-sandShade-400 text-sandShade-200';

  return (
    <Box>
      <OrderButton value={Order.ASC} classNames={selectedOrder === Order.ASC ? selectedClasses : ''} handleOrderToggle={handleOrderToggle}>
        <ArrowUpwardIcon className="h-8 w-8 px-0" />
      </OrderButton>
      <OrderButton value={Order.DESC} classNames={selectedOrder === Order.DESC ? selectedClasses : ''} handleOrderToggle={handleOrderToggle}>
        <ArrowDownwardIcon className="h-8 w-8 px-0" />
      </OrderButton>
    </Box>
  );
};

export default OrderButtons;
