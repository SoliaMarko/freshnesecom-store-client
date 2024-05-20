import {HTMLAttributes, ReactElement} from 'react';
import {SliderThumb} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

interface CustomThumbProps extends HTMLAttributes<unknown> {}

const CustomPriceThumb = (props: CustomThumbProps): ReactElement => {
  const {children, ...other} = props;

  return (
    <SliderThumb {...other} className="h-6 w-6  bg-white">
      {children}
      <MonetizationOnIcon />
    </SliderThumb>
  );
};

export default CustomPriceThumb;
