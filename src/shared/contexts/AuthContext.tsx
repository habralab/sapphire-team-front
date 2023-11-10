import { createContext } from 'react';

export const initAuth: {
  isAuth: boolean;
  userId?: string;
  isActivated?: boolean;
} = {
  userId: undefined,
  isAuth: false,
  isActivated: undefined,
};

export const AuthContext = createContext(initAuth);
