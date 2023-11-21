import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IsAuthResponse } from '~/shared/api/types';
import { AuthContext, initAuth } from '~/shared/contexts';
import { useApi } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';
import { Loader } from '~/shared/ui/Loader';
import { StartLogo } from '~/shared/ui/StartLogo';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { userApi } = useApi();
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  const isOnboardingPage = location.pathname === PATHS.onboarding;

  const setAuth = (data: IsAuthResponse) => {
    setState({
      ...state,
      userId: data?.user_id,
      isAuth: !!data,
      isActivated: data?.is_activated,
    });
  };

  const [state, setState] = useState(initAuth);

  useEffect(() => {
    userApi
      .isAuth()
      .then((res) => {
        setAuth(res);
      })
      .catch(() => {
        setAuth(null);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, [location.pathname, location.search]);

  return (
    <AuthContext.Provider value={state}>
      {!loaded ? (
        <Flex justifyContent="center" alignItems="center" h="full">
          {isOnboardingPage ? <StartLogo /> : <Loader />}
        </Flex>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
