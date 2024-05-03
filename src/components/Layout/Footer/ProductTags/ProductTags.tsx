import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';
import StyledChip from '@/components/Custom/Chips/StyledChip';
import {temporalProductTags} from '@/temporalData/temporalData';

const ProductTags = (): ReactElement => {
  return (
    <Box className="my-12">
      <Typography className="customH3" align="left">
        Product tags
      </Typography>
      <Box className="flex flex-wrap justify-start gap-4">
        {temporalProductTags.map(
          (product, index): ReactElement => (
            <StyledChip key={`${index}-${product}`} product={product} index={index} />
          )
        )}
      </Box>
    </Box>
  );
};

export default ProductTags;
