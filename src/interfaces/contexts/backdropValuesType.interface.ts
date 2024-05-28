export interface BackdropValuesType {
  isOpen: boolean;
}

export interface BackdropParamsType extends BackdropValuesType {
  openBackdrop: () => void;
  closeBackdrop: () => void;
}
