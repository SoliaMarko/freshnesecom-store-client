export interface BreadcrumbsValuesType {
  [key: string]: string;
}

export interface OnAddBreadcrumbParamsType {
  link: string;
  name: string;
}

export interface BreadcrumbsParamsType {
  breadcrumbNameMap: BreadcrumbsValuesType;
  onAddBreadcrumb: (values: OnAddBreadcrumbParamsType) => void;
}
