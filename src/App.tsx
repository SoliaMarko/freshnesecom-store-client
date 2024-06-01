import {ReactElement, useEffect} from 'react';
import {RouterProvider} from 'react-router-dom';
import {CssBaseline, StyledEngineProvider, ThemeProvider} from '@mui/material';
import router from './router';
import './App.css';
import {useAppDispatch} from './hooks/apiHooks';
import {setUser} from './store/slices/user.slice';
import {useGetUserQuery} from './store/services/authApi';
import ToastProvider from './contexts/ToastProvider';
import BackdropProvider from './contexts/BackdropProvider';
import BreadcrumbsProvider from './contexts/BreadcrumbsProvider';
import theme from './style/muiTheme';

function App(): ReactElement {
  const {data} = useGetUserQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) dispatch(setUser(data));
  }, [data]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <BackdropProvider>
            <BreadcrumbsProvider>
              <StyledEngineProvider injectFirst>
                <CssBaseline />
                <div className="app font-body h-full">
                  <RouterProvider router={router} />
                </div>
              </StyledEngineProvider>
            </BreadcrumbsProvider>
          </BackdropProvider>
        </ToastProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
