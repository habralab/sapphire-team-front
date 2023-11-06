import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { useApi } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

export const MainPage = () => {
  const toast = useToast();
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
      .then(() => {
        setLoaded(true);
      })
      .catch((e: Error) => {
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
