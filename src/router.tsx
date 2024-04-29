import {createBrowserRouter} from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Main from './pages/Home/Home';
import Error from './pages/Error/Error';
import {commonRoutes, userRoutes} from './constants/globalConstants/global.constant';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import UserProfile from './pages/UserProfile/UserProfile';
import Favorites from './pages/Favorites/Favorites';
import PrivateRoute from './components/PrivatePage/PrivatePage';

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    element: <AppLayout />,
    children: [
      {
        path: commonRoutes.ROOT,
        element: <Main />
      },
      {
        path: `/${commonRoutes.LOGIN}`,
        element: <LogIn />
      },
      {
        path: `/${commonRoutes.SIGNUP}`,
        element: <SignUp />
      },
      {
        path: `/${commonRoutes.CART}`,
        element: <Cart />
      },
      {
        path: `/${userRoutes.USER}/${userRoutes.PROFILE}`,
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        )
      },
      {
        path: `/${userRoutes.USER}/${userRoutes.FAVORITE}`,
        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        )
      }
    ]
  }
]);

export default router;
