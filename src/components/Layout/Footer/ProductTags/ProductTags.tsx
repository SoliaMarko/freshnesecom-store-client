import {Box} from '@mui/material';
import {ReactElement} from 'react';
import StyledChip from '@/components/Chips/StyledChip';
import StyledHeader3 from '@/components/Headers/StyledHeader3';
import {temporalProductTags} from '@/temporalData/temporalData';

const ProductTags = (): ReactElement => {
  return (
    <Box className="my-12">
      <StyledHeader3>Product tags</StyledHeader3>
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
