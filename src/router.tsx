import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Error from './pages/Error/Error';

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    element: <AppLayout />,
    children: [],
  },
]);

export default router;
