import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PrimaryButton from '@/components/Custom/Buttons/PrimaryButton';
import {NavLink} from 'react-router-dom';
import {productRoutes} from '@/constants/globalConstants/global.constant';

interface ProductDetailsButtonProps {
  id: string;
  title?: string;
  classNames?: string;
}

const ProductDetailsButton = ({id, title = 'Product Details', classNames}: ProductDetailsButtonProps): ReactElement => {
  return (
    <NavLink to={`/${productRoutes.PRODUCTS}/${id}`} reloadDocument>
      <PrimaryButton classNames={classNames}>
        <Box className="flex flex-row items-center justify-between">
          <Typography className="text-base font-semibold sm:text-lg">{title}</Typography>
          <KeyboardArrowRightIcon className="text-xl md:text-2xl" />
        </Box>
      </PrimaryButton>
    </NavLink>
  );
};

export default ProductDetailsButton;
