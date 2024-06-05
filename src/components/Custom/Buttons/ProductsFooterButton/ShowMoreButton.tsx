import {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
import PrimaryButton from '../PrimaryButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {PaginationButtonAction} from '@/enums/global/paginationButtonAction.enum';
import clsx from 'clsx';

interface ShowMoreButtonProps {
  count: number;
  handlePageChange: (newPage: number, action: PaginationButtonAction) => void;
  currentPage: number;
  classNames?: string;
}

const ShowMoreButton = ({count, handlePageChange, currentPage, classNames}: ShowMoreButtonProps): ReactElement => {
  const handleClick = (): void => {
    handlePageChange(currentPage + 1, PaginationButtonAction.ShowMore);
  };

  if (currentPage >= count - 1) return <></>;

  return (
    <Box className={clsx('flex flex-1 flex-row items-center justify-center', classNames)}>
      <PrimaryButton onClickHandler={handleClick}>
        <Typography className="text-base font-semibold md:text-lg">Show more products</Typography>
        <KeyboardArrowDownIcon />
      </PrimaryButton>
    </Box>
  );
};

export default ShowMoreButton;
