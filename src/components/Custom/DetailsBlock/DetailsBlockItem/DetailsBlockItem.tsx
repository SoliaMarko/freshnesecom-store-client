import {getFormatedLabel} from '@/utils/stringFormaters/getFormatedLabel';
import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';

interface DetailsBlockItemProps {
  title: string;
  content?: string;
  valueColor?: string;
}

const DetailsBlockItem = ({title = '', content = ''}: DetailsBlockItemProps): ReactElement | undefined => {
  const formattedTitle = getFormatedLabel(title);

  return (
    <Box className="flex flex-row items-center justify-start gap-2 sm:gap-0">
      <Typography className=" w-1/3 text-left capitalize text-primary-300">{formattedTitle}</Typography>
      <Typography className="text-left capitalize text-secondary">{content}</Typography>
    </Box>
  );
};

export default DetailsBlockItem;
