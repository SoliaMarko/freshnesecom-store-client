import {AdditionalDescription} from '@/interfaces/products/productEntity.interface';
import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {useId} from 'react-id-generator';

interface AdditionalDescriptionProps {
  descriptions: AdditionalDescription[];
}

const AdditionalDescriptionBlock = ({descriptions}: AdditionalDescriptionProps): ReactElement => {
  return (
    <Box className="flex flex-col gap-8">
      {descriptions?.map((description) => {
        const [keyID] = useId();

        return (
          <Box key={keyID} className="text-left">
            <Typography className="customH3">{description?.title}</Typography>
            <Typography className="customH4 font-normal">{description?.content}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default AdditionalDescriptionBlock;
