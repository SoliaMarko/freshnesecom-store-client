import {RouterProvider} from 'react-router-dom';
import {CssBaseline} from '@mui/material';
import router from './router';
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
