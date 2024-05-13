import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import PrimaryButton from '../PrimaryButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ShowMoreButton = (): ReactElement => {
  const handleShowMore = () => {
    console.log('show more works');
  };

  return (
    <Box className="flex flex-1 flex-row items-center justify-center">
      <PrimaryButton onClickHandler={handleShowMore}>
        <Typography className="text-lg font-semibold">Show more products</Typography>
        <KeyboardArrowDownIcon />
      </PrimaryButton>
    </Box>
  );
};

export default ShowMoreButton;
