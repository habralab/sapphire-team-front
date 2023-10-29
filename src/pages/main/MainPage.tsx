import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';

export const MainPage = () => {
  const [searchParams] = useSearchParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    if (!code || !state) {
      setLoaded(true);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios
      .get(
        'https://stage.sapphire.pet-project.habr.com/backend/users/api/rest/auth/oauth2/habr/callback',
        {
          signal: controller.signal,
          params: {
            code,
            state,
          },
          withCredentials: true,
        },
      )
      .then(() => {
        setLoaded(true);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return loaded ? <Navigate to={PATHS.search} replace /> : null;
};
