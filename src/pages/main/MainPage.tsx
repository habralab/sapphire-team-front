import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useApi } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

export const MainPage = () => {
  const toast = useToast();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { userApi } = useApi();

  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    if (!code || !state) {
      navigate(PATHS.search);
      return;
    }

    const abortController = new AbortController();
    const { signal } = abortController;

    userApi
      .afterAuth({ code, state }, signal)
      .then(() => {
        navigate(PATHS.search);
      })
      .catch((e: Error) => {
        if (signal.aborted) return;
        navigate(PATHS.search);

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

  return null;
};
