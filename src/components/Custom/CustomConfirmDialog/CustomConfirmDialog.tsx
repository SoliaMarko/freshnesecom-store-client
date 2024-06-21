import {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {IRootState} from '@/types/IRootState.type';
import {setConfirmation, resetConfirmation} from '@/store/slices/confirmation.slice';
import {useAppDispatch} from '@/hooks/api/apiHooks';
import {Typography} from '@mui/material';

const CustomConfirmDialog = (): ReactElement => {
  const {confirmInfo, isOpen, onConfirm, type} = useSelector((state: IRootState) => state.confirmation);
  const dispatch = useAppDispatch();
  const {title, content, options} = confirmInfo;

  const handleCancel = (): void => {
    dispatch(resetConfirmation());
  };

  const handleConfirmCancel = (): void => {
    onConfirm.handler();
    dispatch(setConfirmation({isConfirmed: true}));
    dispatch(resetConfirmation());
  };

  return (
    <Dialog open={isOpen} onClose={handleCancel} aria-labelledby={`alert-dialog-${title}`} aria-describedby={`alert-dialog-${content}`}>
      <DialogTitle id={`${type}-dialog-${title}`}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText className="p-14" id={`${type}-dialog-${content}`}>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>
          <Typography sx={{textTransform: 'capitalize', color: 'green'}}>{options?.cancel}</Typography>
        </Button>
        <Button onClick={handleConfirmCancel} autoFocus>
          <Typography sx={{textTransform: 'capitalize'}}>{options?.confirm}</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomConfirmDialog;
