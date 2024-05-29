import {ReactElement, ReactNode, useEffect, useRef} from 'react';
import {Box, Card, CardContent, IconButton, Typography} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {useNavigate} from 'react-router-dom';
import {commonRoutes} from '@/constants/globalConstants/global.constant';
import {confirmationQuestions} from '@/constants/confirmationQuestionsConstants/confirmationQuestions.constant';
import {setConfirmation} from '@/store/slices/confirmation.slice';
import {useAppDispatch} from '@/hooks/apiHooks';

interface CustomCardProps {
  children: ReactNode;
  title?: string;
}

const CustomCard = ({children, title = ''}: CustomCardProps): ReactElement => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cardRef.current) {
      const viewportHeight = window.innerHeight;
      const cardHeight = cardRef.current.offsetHeight;

      cardHeight >= viewportHeight
        ? cardRef.current.scrollIntoView({behavior: 'smooth'})
        : window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
  }, []);

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

  return (
    <Card className="z-20 border-2 border-solid border-primary-200 bg-primary-500 px-2 py-4 shadow-xl" ref={cardRef}>
      <Box className="mr-2 flex flex-row justify-end">
        <IconButton className="max-w-fit p-0 hover:bg-red-500" onClick={handleConfirmClose}>
          <HighlightOffIcon className="z-10 h-9 w-9 text-red-600 hover:text-red-50" />
        </IconButton>
      </Box>
      <CardContent className="-mt-5 max-w-2xl">
        <Box className="flex w-full flex-col gap-5">
          <Typography className="pb-5 font-display text-2xl font-semibold">{title}</Typography>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
