import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { useApi, useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

export const MainPage = () => {
  const toast = useToast();
  const { setAuth } = useAuth();
  const [searchParams] = useSearchParams();
  const [loaded, setLoaded] = useState(false);
  const { userApi } = useApi();

  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    if (!code || !state) {
      setLoaded(true);
      return;
    }

    userApi
      .afterAuth({ code, state })
      .then((data) => {
        setLoaded(true);
        setAuth(data.user_id);
      })
      .catch((e: Error) => {
        setAuth(null);
        setLoaded(true);
        toast({
          title: 'Ошибка авторизации',
          description: e.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });
  }, []);

  return loaded ? <Navigate to={PATHS.search} replace /> : null;
};
