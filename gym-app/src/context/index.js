// src/context/index.js
import {create} from 'zustand';
import { createContext, useContext } from 'react';

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  loginError: false, // Define loginError here
  setIsLoggedIn: (value) => set({ isLoggedIn: value }),
  setLoginError: (value) => set({ loginError: value }),
  handleLogout: () => set({ isLoggedIn: false }),
}));

const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

// Context provider
export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={useAuthStore}>
      {children}
    </AppContext.Provider>
  );
};

export default useAuthStore; // Export the Zustand store
