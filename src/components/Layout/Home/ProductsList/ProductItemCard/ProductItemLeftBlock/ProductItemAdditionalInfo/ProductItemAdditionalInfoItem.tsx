import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';

interface ProductItemAdditionalInfoItemProps {
  title?: string;
  content?: string;
}

const ProductItemAdditionalInfoItem = ({title = '', content = ''}: ProductItemAdditionalInfoItemProps): ReactElement | '' => {
  return (
    content && (
      <Box className="flex flex-row justify-start">
        <Typography className=" w-1/3 text-left capitalize text-primary-300">{title}</Typography>
        <Typography className="text-left text-secondary">{content}</Typography>
      </Box>
    )
  );
};

export default ProductItemAdditionalInfoItem;
