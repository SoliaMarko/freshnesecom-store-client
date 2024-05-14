import {AdditionalDescription} from '@/interfaces/products/productEntity.interface';
import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';

interface AdditionalDescriptionProps {
  descriptions: AdditionalDescription[];
}

const AdditionalDescriptionBlock = ({descriptions}: AdditionalDescriptionProps) => {
  return (
    <Box className="flex flex-col gap-8">
      {descriptions?.map(
        (description, index): ReactElement => (
          <Box key={`${index}-${description}`} className="text-left">
            <Typography className="customH3">{description?.title}</Typography>
            <Typography className="customH4 font-normal">{description?.content}</Typography>
          </Box>
        )
      )}
    </Box>
  );
};

export default AdditionalDescriptionBlock;
