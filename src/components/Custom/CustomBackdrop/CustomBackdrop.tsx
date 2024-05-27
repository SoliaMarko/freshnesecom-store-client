import {BackdropContext} from '@/contexts/BackdropProvider';
import {Backdrop} from '@mui/material';
import {ReactElement, useContext} from 'react';

const CustomBackdrop = (): ReactElement => {
  const {isOpen} = useContext(BackdropContext);

  const handleCloseClick = (): void => {
    history.back();
  };

  return <Backdrop open={isOpen} className="z-20" onClick={handleCloseClick} />;
};

export default CustomBackdrop;
