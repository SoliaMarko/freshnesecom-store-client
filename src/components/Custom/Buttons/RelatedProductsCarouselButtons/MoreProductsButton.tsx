import {ReactElement} from 'react';
import PrimaryButton from '../PrimaryButton';
import {Box, Typography} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const MoreProductsButton = (): ReactElement => {
  return (
    <PrimaryButton type="outlined" classNames="p-0 border-none">
      <Box className="flex flex-row items-center justify-between">
        <Typography className="text-base font-semibold text-secondary-200 sm:text-xl sm:text-primary">More products</Typography>
        <KeyboardArrowRightIcon />
      </Box>
    </PrimaryButton>
  );
};

export default MoreProductsButton;
