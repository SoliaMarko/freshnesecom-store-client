import {createBrowserRouter} from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import {commonRoutes, productRoutes, userRoutes} from './constants/globalConstants/global.constant';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import PrivateRoute from './pages/PrivatePage/PrivatePage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import AllProducts from './pages/AllProducts/AllProducts';
import UserProfile from './pages/User/UserProfile/UserProfile';
import Favorites from './pages/User/Favorites/Favorites';
import {ReactNode} from 'react';

export interface ExtendedRouteChildrenType {
  path: string;
  element: ReactNode;
  breadcrumb?: string;
}

export interface ExtendedRouteObjectType {
  errorElement: ReactNode;
  element: ReactNode;
  children: ExtendedRouteChildrenType[];
}

const routes: ExtendedRouteObjectType[] = [
  {
    errorElement: <Error />,
    element: <AppLayout />,
    children: [
      {
        path: commonRoutes.ROOT,
        element: <Home />,
        breadcrumb: 'Home'
      },
      {
        path: `/${productRoutes.PRODUCTS}`,
        element: <AllProducts />,
        breadcrumb: 'AllProducts'
      },
      {
        path: `/${productRoutes.PRODUCTS}/${productRoutes.ID}`,
        element: <ProductDetailsPage />,
        breadcrumb: 'Details'
      },
      {
        path: `/${commonRoutes.LOGIN}`,
        element: <LogIn />,
        breadcrumb: 'LogIn'
      },
      {
        path: `/${commonRoutes.SIGNUP}`,
        element: <SignUp />,
        breadcrumb: 'SignUp'
      },
      {
        path: `/${commonRoutes.CART}`,
        element: <Cart />,
        breadcrumb: 'Cart'
      },
      {
        path: `/${userRoutes.USER}`,
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
        breadcrumb: 'Profile'
      },
      {
        path: `/${userRoutes.USER}/${userRoutes.FAVORITES}`,
        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
        breadcrumb: 'Favorites'
      }
    ]
  }
];

const router = createBrowserRouter(routes as ExtendedRouteObjectType[]);

export default router;
