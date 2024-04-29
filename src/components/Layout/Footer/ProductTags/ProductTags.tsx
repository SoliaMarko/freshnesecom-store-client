import {Box} from '@mui/material';
import {ReactElement} from 'react';
import StyledChip from '@/components/Custom/Chips/StyledChip';
import StyledHeader from '@/components/Custom/CustomTypography/StyledHeader';
import {temporalProductTags} from '@/temporalData/temporalData';

const ProductTags = (): ReactElement => {
  return (
    <Box className="my-12">
      <StyledHeader align="left" size={3}>
        Product tags
      </StyledHeader>
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
