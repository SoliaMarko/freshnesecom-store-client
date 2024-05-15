import {HTMLAttributes, ReactElement} from 'react';
import {SliderThumb} from '@mui/material';

interface CustomThumbProps extends HTMLAttributes<unknown> {}

const CustomThumb = (props: CustomThumbProps): ReactElement => {
  const {children, ...other} = props;

  return (
    <SliderThumb {...other} className="h-6 w-6 border-2 border-solid border-secondary-300 bg-white">
      {children}
    </SliderThumb>
  );
};

export default CustomThumb;
