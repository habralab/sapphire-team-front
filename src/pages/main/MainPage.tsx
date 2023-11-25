import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { useApi } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

export const MainPage = () => {
  const toast = useToast();
  const [searchParams] = useSearchParams();
  const [redirectPath, setRedirectPath] = useState('');
  const { userApi } = useApi();

  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    if (!code || !state) {
      setRedirectPath(PATHS.search);
      return;
    }

    const abortController = new AbortController();
    const { signal } = abortController;

    userApi
      .afterAuth({ code, state }, signal)
      .then((data) => {
        if (!data.user.is_activated) {
          setRedirectPath(PATHS.onboarding);
        } else {
          setRedirectPath(PATHS.search);
        }
      })
      .catch((e: Error) => {
        if (signal.aborted) return;

        setRedirectPath(PATHS.search);
        toast({
          title: 'Ошибка авторизации',
          description: e.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return redirectPath ? <Navigate to={redirectPath} replace /> : null;
};
