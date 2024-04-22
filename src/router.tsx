import {createBrowserRouter} from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Main from './pages/Home/Home';
import Error from './pages/Error/Error';
import {routes} from './constants/global.constant';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    element: <AppLayout />,
    children: [
      {
        path: routes.ROOT,
        element: <Main />
      },
      {
        path: `/${routes.LOGIN}`,
        element: <LogIn />
      },
      {
        path: `/${routes.SIGNUP}`,
        element: <SignUp />
      },
      {
        path: `/${routes.CART}`,
        element: <Cart />
      }
    ]
  }
]);

export default router;
