import {ReactElement, useEffect} from 'react';
import {RouterProvider} from 'react-router-dom';
import {CssBaseline, StyledEngineProvider} from '@mui/material';
import router from './router';
import './App.css';
import {useAppDispatch} from './hooks/apiHooks';
import {setUser} from './store/slices/user.slice';
import {useGetUserQuery} from './store/services/authApi';
import ToastProvider from './contexts/ToastProvider';

function App(): ReactElement {
  const {data} = useGetUserQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) dispatch(setUser(data));
  }, [data]);

  return (
    <>
      <ToastProvider>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <div className="app font-body h-full">
            <RouterProvider router={router} />
          </div>
        </StyledEngineProvider>
      </ToastProvider>
    </>
  );
}

export default App;
