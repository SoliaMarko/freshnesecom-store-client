import {AdditionalDescription} from '@/interfaces/products/productEntity.interface';
import {ItemWithIDType} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';

interface AdditionalDescriptionProps {
  descriptions: ItemWithIDType<AdditionalDescription>[];
}

const AdditionalDescriptionBlock = ({descriptions}: AdditionalDescriptionProps): ReactElement => {
  return (
    <Box className="flex max-h-96 flex-col gap-4 overflow-y-auto">
      {descriptions?.map((description) => {
        const {
          id,
          value: {title, content}
        } = description;
        if (!content) return <></>;

        return (
          <Box key={id} className="text-left">
            <Typography className="customH3 m-0 mb-1">{title}</Typography>
            <Typography className="customH4 font-normal">{content}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default AdditionalDescriptionBlock;
