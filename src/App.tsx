import {ReactElement} from 'react';
import {RouterProvider} from 'react-router-dom';
import {CssBaseline, StyledEngineProvider} from '@mui/material';
import router from './router';
import './App.css';

function App(): ReactElement {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <div className="app font-body h-full">
          <RouterProvider router={router} />
        </div>
      </StyledEngineProvider>
    </>
  );
}

export default App;
