import MoreProductsButton from '@/components/Custom/Buttons/RelatedProductsCarouselButtons/MoreProductsButton';
import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';

const RelatedProductsCarouselHeader = (): ReactElement => {
  return (
    <Box className="my-2 flex flex-row items-center justify-between">
      <Box>
        <Typography className="customH2 m-0">You will maybe love</Typography>
      </Box>
      <MoreProductsButton />
    </Box>
  );
};

export default RelatedProductsCarouselHeader;
