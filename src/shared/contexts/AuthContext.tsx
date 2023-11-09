import { createContext } from 'react';

export const initAuth: {
  isAuth: boolean;
  userId: string | null;
  setAuth: (userId: string | null) => void;
} = {
  userId: localStorage.getItem('user_id'),
  isAuth: !!localStorage.getItem('user_id'),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuth: () => {},
};

export const AuthContext = createContext(initAuth);
