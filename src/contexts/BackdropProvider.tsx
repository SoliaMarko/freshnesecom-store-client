import {initialBackdropValues} from '@/constants/contextsConstants/backdropConstants/backdrop.constant';
import {BackdropParamsType} from '@/interfaces/contexts/backdropValuesType.interface';
import {ReactElement, ReactNode, createContext, useState} from 'react';

export const BackdropContext = createContext(initialBackdropValues);

interface BackdropProviderProps {
  children: ReactNode;
}

const BackdropProvider = ({children}: BackdropProviderProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openBackdrop = (): void => {
    setIsOpen(true);
  };

  const closeBackdrop = (): void => {
    setIsOpen(false);
  };

  const backdropValues: BackdropParamsType = {
    isOpen,
    openBackdrop,
    closeBackdrop
  };

  return <BackdropContext.Provider value={backdropValues}>{children}</BackdropContext.Provider>;
};

export default BackdropProvider;
