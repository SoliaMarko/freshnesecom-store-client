import {useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {BreadcrumbsContext} from '@/contexts/BreadcrumbsProvider';
import {RouteObject} from 'react-router-dom';

type RouteConfig = RouteObject;

type RouterConfig = {
  routes: RouteConfig[];
};

export interface UseBreadcrumbsReturnValues {
  name: string;
  href?: string;
}

interface UseBreadcrumbsParams {
  router: RouterConfig;
}

export const useBreadcrumbs = ({router}: UseBreadcrumbsParams): UseBreadcrumbsReturnValues[] => {
  const {breadcrumbNameMap} = useContext(BreadcrumbsContext);
  const location = useLocation();
  const pathnames = ['', ...location.pathname.split('/').filter((pathname) => pathname)];
  const currentRoutes: string[] = [];

  return pathnames.map((pathname) => {
    currentRoutes.push(pathname);
    const currentPath = currentRoutes.join('/') || '/';
    const route = router?.routes[0]?.children?.find((route) => route?.path?.startsWith(currentPath));

    return {
      name: breadcrumbNameMap[currentPath],
      href: route?.path
    };
  });
};
