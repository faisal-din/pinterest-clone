import { createContext } from 'react';

export const PinContext = createContext();

const PinContextProvider = ({ children }) => {
  return <PinContext.Provider value={{}}>{children}</PinContext.Provider>;
};

export default PinContextProvider;
