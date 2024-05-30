import {BreadcrumbsParamsType, BreadcrumbsValuesType} from '@/interfaces/contexts/breadcrumbsValuesType.interface';

export const initialBreadcrumbsValues: BreadcrumbsValuesType = {
  '/': 'Homepage',
  '/products': 'All products',
  '/products/:id': 'Product',
  '/login': 'LogIn',
  '/signup': 'SignUp',
  '/user': 'Profile',
  '/user/favorites': 'Favorites',
  '/cart': 'Cart'
};

export const initialBreadcrumbsArguments: BreadcrumbsParamsType = {breadcrumbNameMap: initialBreadcrumbsValues, onAddBreadcrumb: (): void => {}};
