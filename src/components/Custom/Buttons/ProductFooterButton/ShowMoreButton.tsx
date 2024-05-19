import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import PrimaryButton from '../PrimaryButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {ActionType} from '@/components/Layout/Home/ProductsWithFiltersContainer/ProductsWithFiltersContainer';

interface ShowMoreButtonProps {
  count: number;
  handlePageChange: (newPage: number, action: ActionType) => void;
  currentPage: number;
}

const ShowMoreButton = ({count, handlePageChange, currentPage}: ShowMoreButtonProps): ReactElement => {
  const handleClick = (): void => {
    handlePageChange(currentPage + 1, 'showMore');
  };

  if (currentPage >= count - 1) return <></>;

  return (
    <Box className="flex flex-1 flex-row items-center justify-center">
      <PrimaryButton onClickHandler={handleClick}>
        <Typography className="text-lg font-semibold">Show more products</Typography>
        <KeyboardArrowDownIcon />
      </PrimaryButton>
    </Box>
  );
};

export default ShowMoreButton;
