import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthContext } from '~/shared/contexts';
import { useApi } from '~/shared/hooks';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { userApi } = useApi();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    userApi
      .isAuth()
      .then((res) => {
        setIsAuth(res);
      })
      .catch(() => {
        setIsAuth(false);
      });
  }, [location.pathname, location.search]);

  return (
    <AuthContext.Provider value={isAuth}>
      {isAuth === null ? null : children}
    </AuthContext.Provider>
  );
}
