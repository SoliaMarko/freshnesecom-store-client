import {IRootState} from '@/types/IRootState.type';
import {Backdrop, Box, CircularProgress} from '@mui/material';
import {ReactElement} from 'react';
import {useSelector} from 'react-redux';

const CustomSpinner = (): ReactElement => {
  const {loading} = useSelector((state: IRootState) => state.loading);

  return (
    <Box>
      <Backdrop sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}} open={!!loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default CustomSpinner;
