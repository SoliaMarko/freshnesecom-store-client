import {HTMLAttributes, ReactElement} from 'react';
import {SliderThumb} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface CustomThumbProps extends HTMLAttributes<unknown> {}

export const CustomRatingThumb = (props: CustomThumbProps): ReactElement => {
  const {children, ...other} = props;

  return (
    <SliderThumb {...other} className="h-6 w-6  bg-white">
      {children}
      <StarBorderIcon />
    </SliderThumb>
  );
};
