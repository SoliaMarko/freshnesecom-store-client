import {initialBreadcrumbsArguments, initialBreadcrumbsValues} from '@/constants/contextsConstants/breadcrumbsConstants/breadcrumbs.constant';
import {BreadcrumbsParamsType, BreadcrumbsValuesType, OnAddBreadcrumbParamsType} from '@/interfaces/contexts/breadcrumbsValuesType.interface';
import {ReactElement, ReactNode, createContext, useState} from 'react';

export const BreadcrumbsContext = createContext(initialBreadcrumbsArguments);

interface BreadcrumbsProviderProps {
  children: ReactNode;
}

const BreadcrumbsProvider = ({children}: BreadcrumbsProviderProps): ReactElement => {
  const [breadcrumbNameMap, setBreadcrumbNameMap] = useState<BreadcrumbsValuesType>(initialBreadcrumbsValues);

  const addBreadcrumb = ({link, name}: OnAddBreadcrumbParamsType): void => {
    setBreadcrumbNameMap((prev) => ({...prev, [link]: name}));
  };

  const breadcrumbValues: BreadcrumbsParamsType = {
    breadcrumbNameMap,
    onAddBreadcrumb: addBreadcrumb
  };

  return <BreadcrumbsContext.Provider value={breadcrumbValues}>{children}</BreadcrumbsContext.Provider>;
};

export default BreadcrumbsProvider;
