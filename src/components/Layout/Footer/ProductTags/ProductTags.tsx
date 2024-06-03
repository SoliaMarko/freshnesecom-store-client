import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';
import CustomChip from '@/components/Custom/CustomChip/CustomChip';
import {temporalProductTags} from '@/temporalData/temporalData';

const ProductTags = (): ReactElement => {
  return (
    <Box className="my-12">
      <Typography className="customH3 text-left">Product tags</Typography>
      <Box className="flex flex-wrap justify-start gap-2 sm:gap-4">
        {temporalProductTags.map(({id, value}) => (
          <CustomChip key={id} value={value} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductTags;
