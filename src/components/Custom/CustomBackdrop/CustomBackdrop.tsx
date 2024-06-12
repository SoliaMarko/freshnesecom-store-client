import {confirmationQuestions} from '@/constants/confirmationQuestionsConstants/confirmationQuestions.constant';
import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {BackdropContext} from '@/contexts/BackdropProvider';
import {useAppDispatch} from '@/hooks/api/apiHooks';
import {setConfirmation} from '@/store/slices/confirmation.slice';
import {Backdrop} from '@mui/material';
import {ReactElement, useContext} from 'react';
import {useNavigate} from 'react-router-dom';

const CustomBackdrop = (): ReactElement => {
  const {isOpen} = useContext(BackdropContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClose = (): void => {
    navigate(`${commonRoutes.ROOT}`);
  };

  const handleConfirmClose = (): void => {
    dispatch(
      setConfirmation({
        confirmInfo: confirmationQuestions.close,
        isOpen: true,
        onConfirm: {handler: handleClose}
      })
    );
  };

  return <Backdrop open={isOpen} className="z-20" onClick={handleConfirmClose} />;
};

export default CustomBackdrop;
