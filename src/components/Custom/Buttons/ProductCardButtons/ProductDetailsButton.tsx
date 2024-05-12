import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PrimaryButton from '@/components/Custom/Buttons/PrimaryButton';
import {NavLink} from 'react-router-dom';
import {productRoutes} from '@/constants/globalConstants/global.constant';

interface ProductDetailsButtonProps {
  id: string;
}

const ProductDetailsButton = ({id}: ProductDetailsButtonProps): ReactElement => {
  return (
    <NavLink to={`/${productRoutes.PRODUCT}/${id}`}>
      <PrimaryButton>
        <Box className="flex flex-row items-center justify-between">
          <Typography className="text-lg font-semibold">Product Details</Typography>
          <KeyboardArrowRightIcon />
        </Box>
      </PrimaryButton>
    </NavLink>
  );
};

export default ProductDetailsButton;