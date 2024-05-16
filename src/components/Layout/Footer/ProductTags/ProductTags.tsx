import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';
import CustomChip from '@/components/Custom/CustomChips/CustomChip';
import {temporalProductTags} from '@/temporalData/temporalData';
import {useId} from 'react-id-generator';

const ProductTags = (): ReactElement => {
  return (
    <Box className="my-12">
      <Typography className="customH3" align="left">
        Product tags
      </Typography>
      <Box className="flex flex-wrap justify-start gap-4">
        {temporalProductTags.map((product) => {
          const [keyID] = useId();

          return <CustomChip key={keyID} value={product} />;
        })}
      </Box>
    </Box>
  );
};

export default ProductTags;
