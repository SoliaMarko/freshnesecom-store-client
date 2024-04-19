import {RouterProvider} from 'react-router-dom';
import {CssBaseline, StyledEngineProvider} from '@mui/material';
import router from './router';
import './App.css';

function App(): JSX.Element {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <div className="app h-full font-body">
          <RouterProvider router={router} />
        </div>
      </StyledEngineProvider>
    </>
  );
}

export default App;
