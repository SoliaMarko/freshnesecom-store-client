import {ChangeEvent, ReactElement} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {Box, Typography} from '@mui/material';

interface CustomPaginationProps {
  count?: number;
  page?: number;
  disabled?: boolean;
  handlePageChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const CustomPagination = ({count = 5, page = 1, disabled = false, handlePageChange}: CustomPaginationProps): ReactElement => {
  return (
    <Box className="flex flex-1 flex-row items-center">
      <Typography className="text-primary-300">Page</Typography>
      <Stack spacing={2}>
        <Pagination className="text-secondary-200" count={count} page={page} onChange={handlePageChange} disabled={disabled} />
      </Stack>
    </Box>
  );
};

export default CustomPagination;
