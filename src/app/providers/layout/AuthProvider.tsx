import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthContext, initAuth } from '~/shared/contexts';
import { useApi } from '~/shared/hooks';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { userApi } = useApi();
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  const setAuth = (userId: string | null) => {
    setState({ ...state, userId, isAuth: !!userId });
  };

  const initState = {
    ...initAuth,
    setAuth,
  };

  const [state, setState] = useState(initState);

  useEffect(() => {
    userApi
      .isAuth()
      .then((res) => {
        if (!res) {
          setAuth(null);
          localStorage.removeItem('user_id');
        }
      })
      .catch(() => {
        setAuth(null);
        localStorage.removeItem('user_id');
      })
      .finally(() => {
        setLoaded(true);
      });
  }, [location.pathname, location.search]);

  return (
    <AuthContext.Provider value={state}>{!loaded ? null : children}</AuthContext.Provider>
  );
}
