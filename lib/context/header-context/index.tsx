import React, {
  ComponentPropsWithoutRef,
  createContext,
  useContext,
  useState,
} from 'react';

interface IHeaderContext {
  isWhite: boolean;
  setIsWhite: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderContext = createContext<IHeaderContext | null>(null);

interface IHeaderContextProvider extends ComponentPropsWithoutRef<'div'> {}

const HeaderContextProvider: React.FC<IHeaderContextProvider> = ({
  children,
}) => {
  const [isWhite, setIsWhite] = useState(false);

  return (
    <HeaderContext.Provider value={{ isWhite, setIsWhite }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;

export const useHeaderContext = () => useContext(HeaderContext);
