import {AdditionalDescription} from '@/interfaces/products/productEntity.interface';
import {WithID} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';

interface AdditionalDescriptionProps {
  descriptions: WithID<AdditionalDescription>[];
}

const AdditionalDescriptionBlock = ({descriptions}: AdditionalDescriptionProps): ReactElement => {
  return (
    <Box className="flex flex-col gap-8">
      {descriptions?.map((description) => {
        const {
          id,
          value: {title, content}
        } = description;
        if (!content) return <></>;

        return (
          <Box key={id} className="text-left">
            <Typography className="customH3">{title}</Typography>
            <Typography className="customH4 font-normal">{content}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default AdditionalDescriptionBlock;
