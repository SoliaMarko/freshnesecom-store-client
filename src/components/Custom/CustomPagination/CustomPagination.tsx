import {ChangeEvent, ReactElement} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {Box, PaginationItem, Typography} from '@mui/material';
import {generalAppInfo} from '@/constants/globalConstants/global.constant';
import {PaginationButtonAction} from '@/enums/global/paginationButtonAction.enum';

interface CustomPaginationProps {
  count: number;
  currentPage?: number;
  disabled?: boolean;
  handlePageChange: (page: number, action: PaginationButtonAction) => void;
}

const CustomPagination = ({count, currentPage = 1, disabled = false, handlePageChange}: CustomPaginationProps): ReactElement => {
  const handleClick = (_event: ChangeEvent<unknown>, page: number): void => {
    handlePageChange(page - 1, PaginationButtonAction.SwitchPage);
  };

  return (
    <Box className="flex flex-1 flex-row items-center">
      <Typography className="text-primary-300">Page</Typography>
      <Stack spacing={2}>
        <Pagination
          count={count}
          shape="circular"
          defaultPage={generalAppInfo.pagination.INITIAL_PAGE}
          page={currentPage + 1}
          onChange={handleClick}
          disabled={disabled}
          renderItem={(item) => <PaginationItem className={item.selected ? 'bg-secondary-200 text-white' : ''} {...item} />}
        />
      </Stack>
    </Box>
  );
};

export default CustomPagination;
