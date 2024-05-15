import {ReactElement, createContext, useEffect, useState} from 'react';
import {RouterProvider} from 'react-router-dom';
import {CssBaseline, StyledEngineProvider} from '@mui/material';
import router from './router';
import './App.css';
import {useAppDispatch} from './hooks/apiHooks';
import {setUser} from './store/slices/user.slice';
import {useGetUserQuery} from './store/services/authApi';
import {ToastParamsType, ToastValuesType} from './interfaces/features/toastValuesType.interface';
import {initialToastArguments, initialToastValues} from './constants/toastsConstants/toasts.constant';

export const ToastContext = createContext(initialToastArguments);

function App(): ReactElement {
  const [toast, setToast] = useState<ToastValuesType>(initialToastValues);
  const {data} = useGetUserQuery();
  const dispatch = useAppDispatch();

  const handleToast = (value: ToastValuesType): void => {
    setToast(() => {
      return value;
    });
  };

  const toastValues: ToastParamsType = {
    toast: toast,
    onHandleToast: handleToast
  };

  useEffect(() => {
    if (data) dispatch(setUser(data));
  }, [data]);

  return (
    <>
      <ToastContext.Provider value={toastValues}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <div className="app font-body h-full">
            <RouterProvider router={router} />
          </div>
        </StyledEngineProvider>
      </ToastContext.Provider>
    </>
  );
}

export default App;
