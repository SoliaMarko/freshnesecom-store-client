import {ReactElement, useEffect} from 'react';
import {RouterProvider} from 'react-router-dom';
import {CssBaseline, StyledEngineProvider, ThemeProvider} from '@mui/material';
import router from './router';
import {useAppDispatch} from './hooks/api/apiHooks';
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
                <div className="app font-body xs:bg-red h-full w-full px-4 text-center xl:px-6 2xl:px-12">
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
