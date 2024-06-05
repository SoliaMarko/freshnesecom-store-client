import MoreProductsButton from '@/components/Custom/Buttons/RelatedProductsCarouselButtons/MoreProductsButton';
import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';

const RelatedProductsCarouselHeader = (): ReactElement => {
  return (
    <Box className="my-2 flex flex-row items-center justify-between px-2">
      <Box>
        <Typography className="m-0 text-lg font-semibold sm:text-2xl">You will maybe love</Typography>
      </Box>
      <MoreProductsButton />
    </Box>
  );
};

export default RelatedProductsCarouselHeader;
