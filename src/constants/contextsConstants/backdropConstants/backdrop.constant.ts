import {BackdropParamsType} from '@/interfaces/contexts/backdropValuesType.interface';

export const initialBackdropValues: BackdropParamsType = {
  isOpen: false,
  openBackdrop: (): void => {},
  closeBackdrop: (): void => {}
};
