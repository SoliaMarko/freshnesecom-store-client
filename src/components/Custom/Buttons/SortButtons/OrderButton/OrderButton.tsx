import {Order} from '@/enums/sort/order.enum';
import {Button} from '@mui/material';
import clsx from 'clsx';
import {ReactElement, ReactNode} from 'react';

interface OrderButtonProps {
  children: ReactNode;
  value: Order;
  handleOrderToggle: (order: Order) => void;
  classNames?: string;
}

const OrderButton = ({children, value, handleOrderToggle, classNames}: OrderButtonProps): ReactElement => {
  const handleClick = (): void => {
    handleOrderToggle(value);
  };

  return (
    <Button className={clsx('px-0 text-primary-300', classNames)} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default OrderButton;
