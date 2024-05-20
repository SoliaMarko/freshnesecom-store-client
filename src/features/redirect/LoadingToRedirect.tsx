import {ReactElement, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Box} from '@mui/material';
import {generalAppInfo, commonRoutes} from '@/constants/globalConstants/global.constant';

const LoadingToRedirect = (): ReactElement => {
  const [count, setCount] = useState<number>(generalAppInfo.SECONDS_TO_REDIRECT);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);

    count === 0 && navigate(`/${commonRoutes.LOGIN}`);

    return () => clearInterval(interval);
  }, [count, navigate]);

  return <Box>To view this page you must be authorized. You will be redirected in {count} seconds</Box>;
};

export default LoadingToRedirect;
