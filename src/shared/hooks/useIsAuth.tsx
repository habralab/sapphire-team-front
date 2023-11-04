import { useContext } from 'react';

import { AuthContext } from '../contexts';

export function useIsAuth() {
  return useContext(AuthContext);
}
